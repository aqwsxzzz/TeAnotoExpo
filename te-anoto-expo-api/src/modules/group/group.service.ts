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

  async findAllByUserId(userId: number): Promise<Group[]> {
    return this.groupModel.findAll({ where: { userId } });
  }

  async findOneandUpdate(
    Group: CreateGroupDto,
    groupId: number,
  ): Promise<Group | null> {
    const { name } = Group;

    try {
      return await this.sequelize.transaction(async (t) => {
        const transactionHost = { transaction: t };

        const groupToUpdate = await this.groupModel.findByPk(
          groupId,
          transactionHost,
        );

        await groupToUpdate?.update({ name }, transactionHost);
        return groupToUpdate;
      });
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
