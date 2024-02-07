import { Module } from '@nestjs/common';
import { InterListItemService } from './inter-list-item.service';
import { InterListItemController } from './inter-list-item.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { InterListItem } from './inter-list-item.model';

@Module({
  imports: [SequelizeModule.forFeature([InterListItem])],

  providers: [InterListItemService],
  controllers: [InterListItemController],
})
export class InterListItemModule {}
