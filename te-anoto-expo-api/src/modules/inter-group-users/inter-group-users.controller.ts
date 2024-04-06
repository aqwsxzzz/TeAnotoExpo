import { Body, Controller, Delete, Post } from '@nestjs/common';
import { InterGroupUsersService } from './inter-group-users.service';
import { CreateInterGroupUsers } from './inter-group-users.dto';
import { InterGroupUsers } from './inter-group-users.model';

@Controller('inter-group-users')
export class InterGroupUsersController {
  constructor(private interGroupUsersService: InterGroupUsersService) {}

  @Post()
  async create(
    @Body() interGroupUsersDto: CreateInterGroupUsers,
  ): Promise<InterGroupUsers> {
    return this.interGroupUsersService.create(interGroupUsersDto);
  }

  @Delete()
  async delete(@Body() InterGroupUsers: InterGroupUsers): Promise<void> {
    return this.interGroupUsersService.deleteByUserId(InterGroupUsers);
  }
}
