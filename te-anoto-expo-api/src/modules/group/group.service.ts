import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { Group } from './group.model';
import { InterGroupUsers } from '../inter-group-users/inter-group-users.model';
import { CreateGroupDto } from './group.dto';

@Injectable()
export class GroupService {
  constructor(
    @InjectModel(Group)
    private groupModel: typeof Group,
    private sequelize: Sequelize,
    @InjectModel(InterGroupUsers)
    private interGroupUsersModel: typeof InterGroupUsers,
  ) {}

  async create(group: CreateGroupDto): Promise<Group> {
    const { name, userId } = group;
    return this.groupModel.create({ name, userId });
  }

  async findAllOwnedByUserId(userId: number): Promise<Group[]> {
    return this.groupModel.findAll({ where: { userId } });
  }

  async findAllUserBelongsTo(userId: number): Promise<InterGroupUsers[]> {
    return this.interGroupUsersModel.findAll({ where: { userId } });
  }

  async findOneandUpdate(
    Group: CreateGroupDto,
    groupId: number,
    userId: number,
  ): Promise<Group | null | undefined | Error> {
    const { name } = Group;

    try {
      const group = await this.groupModel.findOne({ where: { id: groupId } });

      if (group?.userId == userId) {
        return await this.sequelize.transaction(async (t) => {
          const transactionHost = { transaction: t };

          const groupToUpdate = await this.groupModel.findByPk(
            groupId,
            transactionHost,
          );

          await groupToUpdate?.update({ name }, transactionHost);
          return groupToUpdate;
        });
      } else {
        const error = new CustomError('Unauthorized', 401);
        return error;
      }
    } catch (err) {
      return err;
    }
  }

  async deleteById(groupId: number): Promise<void> {
    try {
      return await this.sequelize.transaction(async (t) => {
        const transactionHost = { transaction: t };

        const groupToDelete = await this.groupModel.findByPk(
          groupId,
          transactionHost,
        );
        if (groupToDelete) {
          await this.interGroupUsersModel.destroy({
            where: { groupId },
            transaction: t,
          });
          await groupToDelete.destroy(transactionHost);
        }
      });
    } catch (err) {
      return err;
    }
  }
}
