import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';
import { Item } from './item.model';
import { StorePrice } from '../storeprice/storeprice.model';

@Module({
  imports: [SequelizeModule.forFeature([Item, StorePrice])],

  providers: [ItemService],
  controllers: [ItemController],
})
export class ItemModule {}
