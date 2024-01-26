import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';
import { StorePrice } from '../storeprice/storeprice.model';
import { ItemforPrices } from './item.model';

@Module({
  imports: [SequelizeModule.forFeature([ItemforPrices, StorePrice])],

  providers: [ItemService],
  controllers: [ItemController],
})
export class ItemforPricesModule {}
