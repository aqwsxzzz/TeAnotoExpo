import { Module } from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupController } from './group.controller';
import { Group } from './group.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { InterGroupUsers } from '../inter-group-users/inter-group-users.model';

@Module({
  imports: [SequelizeModule.forFeature([Group, InterGroupUsers])],
  providers: [GroupService],
  controllers: [GroupController],
})
export class GroupModule {}
