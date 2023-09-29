import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './user.dto';
import { User } from './user.model';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async create(@Body() CreateUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(CreateUserDto);
  }
}
