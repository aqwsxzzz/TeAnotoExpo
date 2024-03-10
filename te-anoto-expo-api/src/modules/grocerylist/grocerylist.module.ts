import { Module } from '@nestjs/common';
import { GrocerylistService } from './grocerylist.service';
import { GrocerylistController } from './grocerylist.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { GroceryList } from './grocerylist.model';
import { InterListItem } from '../inter-list-item/inter-list-item.model';

@Module({
  imports: [SequelizeModule.forFeature([GroceryList, InterListItem])],
  providers: [GrocerylistService],
  controllers: [GrocerylistController],
})
export class GrocerylistModule {}
