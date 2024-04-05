import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { GroupService } from './group.service';
import { Group } from './group.model';
import { CreateGroupDto } from './group.dto';

@Controller('group')
export class GroupController {
  constructor(private groupService: GroupService) {}

  @Post()
  async create(
    @Body() createGroupDto: CreateGroupDto,
  ): Promise<Group | undefined> {
    return this.groupService.create(createGroupDto);
  }

  @Get(':userId')
  async findAllOwnedByUserId(
    @Param('userId') userId: number,
  ): Promise<Group[]> {
    return this.groupService.findAllOwnedByUserId(userId);
  }

  @Get(':userId/belongs')
  async findAllUserBelongsTo(@Param('userId') userId: number) {
    return this.groupService.findAllUserBelongsTo(userId);
  }

  @Put(':groupId/:userId')
  async findOneandUpdate(
    @Param('groupId') groupId: number,
    @Param('userId') userId: number,
    @Body() Group: CreateGroupDto,
  ) {
    return this.groupService.findOneandUpdate(Group, groupId, userId);
  }

  @Delete(':groupId')
  async deleteById(@Param('groupId') groupId: number) {
    return this.groupService.deleteById(groupId);
  }
}
