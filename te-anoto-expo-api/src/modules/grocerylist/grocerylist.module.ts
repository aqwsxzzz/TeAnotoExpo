import { Module } from '@nestjs/common';
import { GrocerylistService } from './grocerylist.service';
import { GrocerylistController } from './grocerylist.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { GroceryList } from './grocerylist.model';

@Module({
  imports: [SequelizeModule.forFeature([GroceryList])],
  providers: [GrocerylistService],
  controllers: [GrocerylistController],
})
export class GrocerylistModule {}
