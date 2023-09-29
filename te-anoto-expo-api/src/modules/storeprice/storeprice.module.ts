import { Module } from '@nestjs/common';
import { StorepriceService } from './storeprice.service';
import { StorepriceController } from './storeprice.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { StorePrice } from './storeprice.model';

@Module({
  imports: [SequelizeModule.forFeature([StorePrice])],

  providers: [StorepriceService],
  controllers: [StorepriceController],
})
export class StorepriceModule {}
