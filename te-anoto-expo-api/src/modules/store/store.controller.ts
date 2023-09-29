import { Controller, Post, Body } from '@nestjs/common';
import { StoreService } from './store.service';
import { CreateStoreDto } from './store.dto';
import { Store } from './store.model';

@Controller('store')
export class StoreController {
  constructor(private storeService: StoreService) {}

  @Post()
  async create(
    @Body() createStoreDto: CreateStoreDto,
  ): Promise<Store | undefined> {
    return this.storeService.create(createStoreDto);
  }
}
