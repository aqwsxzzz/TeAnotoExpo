import { Module } from '@nestjs/common';
import { StorepriceService } from './storeprice.service';
import { StorepriceController } from './storeprice.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { StorePrice } from './storeprice.model';
import { Store } from '../store/store.model';

@Module({
  imports: [
    SequelizeModule.forFeature([StorePrice]),
    SequelizeModule.forFeature([Store]),
  ],
  providers: [StorepriceService],
  controllers: [StorepriceController],
})
export class StorepriceModule {}
