import {
  Controller,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Get,
} from '@nestjs/common';
import { StorepriceService } from './storeprice.service';
import { CreateStorePriceDto } from './storeprice.dto';
import { StorePrice } from './storeprice.model';

@Controller('storeprice')
export class StorepriceController {
  constructor(private storePriceService: StorepriceService) {}

  @Post()
  async create(
    @Body() createStorePriceDto: CreateStorePriceDto,
  ): Promise<StorePrice | undefined> {
    return this.storePriceService.create(createStorePriceDto);
  }
  @Get(':itemId/ByItemId')
  async findAllByItemId(
    @Param('itemId') itemId: number,
  ): Promise<StorePrice[]> {
    return this.storePriceService.findByItemId(itemId);
  }
  @Get(':storeId/ByStoreId')
  async findAllByStoreId(
    @Param('storeId') storeId: number,
  ): Promise<StorePrice[]> {
    return this.storePriceService.findByStoreId(storeId);
  }
  @Put(':storePriceId')
  async findOneandEdit(
    @Body() storePrice: CreateStorePriceDto,
    @Param('storePriceId') storePriceId: number,
  ) {
    return this.storePriceService.findOneandUpdate(storePrice, storePriceId);
  }
  @Delete(':storePriceId')
  async deleteById(@Param('storePriceId') storePriceId: number) {
    return this.storePriceService.deleteById(storePriceId);
  }
}
