import { Module } from '@nestjs/common';
import { BrandService } from './brand.service';
import { BrandController } from './brand.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Brand } from './brand.model';
import { Item } from '../item/item.model';
import { StorePrice } from '../storeprice/storeprice.model';
import { InterListItem } from '../inter-list-item/inter-list-item.model';

@Module({
  imports: [
    SequelizeModule.forFeature([Brand, Item, StorePrice, InterListItem]),
  ],
  providers: [BrandService],
  controllers: [BrandController],
})
export class BrandModule {}
