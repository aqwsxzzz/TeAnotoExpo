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

  async create(brand: CreateInterGroupUsers): Promise<InterGroupUsers> {
    const { userId, groupId } = brand;
    return this.interGroupUsersModel.create({ userId, groupId });
  }

  async deleteByUserId(userId: number, groupId: number): Promise<void> {
    await this.interGroupUsersModel.destroy({ where: { userId, groupId } });
  }
}
