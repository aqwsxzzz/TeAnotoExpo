import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
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
  @Get(':id')
  async findAllPublicNByUserId(@Param('id') id: number): Promise<Store[]> {
    return this.storeService.findAllPublicNByuserId(id);
  }
  @Put('edit/:id')
  async findOneandUpdate(
    @Body() store: CreateStoreDto,
    @Param('id') id: number,
  ) {
    return this.storeService.EditByPk(store, id);
  }
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.storeService.deleteById(id);
  }
}
