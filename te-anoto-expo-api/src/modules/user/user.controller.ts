import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './user.dto';
import { User } from './user.model';
import { Public } from 'src/Decorators/publicDecorator';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Public()
  @Post()
  async create(@Body() CreateUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(CreateUserDto);
  }
}
