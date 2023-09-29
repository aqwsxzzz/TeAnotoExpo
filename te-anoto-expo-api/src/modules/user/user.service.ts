import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { CreateUserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async create(user: CreateUserDto): Promise<User> {
    const { name, email, password } = user;
    return this.userModel.create({ name, email, password });
  }
  async findOneByPK(id: string): Promise<User | null> {
    const user = await this.userModel.findByPk(id);
    return user ? user : null;
  }
}
