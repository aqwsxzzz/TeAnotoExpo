import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';
import { Item } from './item.model';
import { StorePrice } from '../storeprice/storeprice.model';
import { StorepriceService } from '../storeprice/storeprice.service';

@Module({
  imports: [SequelizeModule.forFeature([Item, StorePrice])],

  providers: [ItemService, StorepriceService],
  controllers: [ItemController],
})
export class ItemModule {}
