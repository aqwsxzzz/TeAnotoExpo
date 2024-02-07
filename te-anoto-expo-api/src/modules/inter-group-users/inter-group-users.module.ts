import { Module } from '@nestjs/common';
import { InterGroupUsersService } from './inter-group-users.service';
import { InterGroupUsersController } from './inter-group-users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { InterGroupUsers } from './inter-group-users.model';

@Module({
  imports: [SequelizeModule.forFeature([InterGroupUsers])],
  providers: [InterGroupUsersService],
  controllers: [InterGroupUsersController],
})
export class InterGroupUsersModule {}
