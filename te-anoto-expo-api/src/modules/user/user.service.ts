import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { CreateUserDto } from './user.dto';
import { log } from 'console';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async create(user: CreateUserDto): Promise<User> {
    const { username, email, password } = user;
    return this.userModel.create({ username, email, password });
  }
  async findOneByPK(id: string): Promise<User | null> {
    const user = await this.userModel.findByPk(id);
    return user ? user : null;
  }
  async findOne(username: string): Promise<User | null> {
    const user = await this.userModel.findOne({ where: { username } });
    return user ? user : null;
  }
}
