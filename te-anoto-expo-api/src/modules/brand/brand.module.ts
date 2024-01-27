import { Module } from '@nestjs/common';
import { BrandService } from './brand.service';
import { BrandController } from './brand.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Brand } from './brand.model';
import { Item } from '../itemforPrices/item.model';

@Module({
  imports: [SequelizeModule.forFeature([Brand, Item])],
  providers: [BrandService],
  controllers: [BrandController],
})
export class BrandModule {}
