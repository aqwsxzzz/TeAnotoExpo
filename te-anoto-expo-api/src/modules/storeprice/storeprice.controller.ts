import { Controller, Post, Body, Param, Delete, Put } from '@nestjs/common';
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
  @Put('edit/:id')
  async findOneandEdit(
    @Body() storePrice: CreateStorePriceDto,
    @Param('id') id: number,
  ) {
    return this.storePriceService.findOneandUpdate(storePrice, id);
  }
  @Delete('delete/:id')
  async deleteById(@Param('id') id: number) {
    return this.storePriceService.deleteById(id);
  }
}
