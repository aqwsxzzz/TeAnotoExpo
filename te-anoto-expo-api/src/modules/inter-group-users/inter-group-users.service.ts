import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { InterGroupUsers } from './inter-group-users.model';
import { CreateInterGroupUsers } from './inter-group-users.dto';

@Injectable()
export class InterGroupUsersService {
  constructor(
    @InjectModel(InterGroupUsers)
    private interGroupUsersModel: typeof InterGroupUsers,
  ) {}

  async create(
    InterGroupUsers: CreateInterGroupUsers,
  ): Promise<InterGroupUsers> {
    const { userId, groupId } = InterGroupUsers;
    return this.interGroupUsersModel.create({ userId, groupId });
  }

  async deleteByUserId(InterGroupUsers: CreateInterGroupUsers): Promise<void> {
    const { userId, groupId } = InterGroupUsers;
    await this.interGroupUsersModel.destroy({ where: { userId, groupId } });
  }
}
