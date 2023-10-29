import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateItemDto } from './item.dto';
import { ItemService } from './item.service';
import { Item } from './item.model';

@Controller('items')
export class ItemController {
  constructor(private itemService: ItemService) {}

  @Post()
  async create(
    @Body() createItemDto: CreateItemDto,
  ): Promise<Item | undefined> {
    return this.itemService.create(createItemDto);
  }
  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Item | null> {
    return this.itemService.findOneByPK(id);
  }
  @Get('type/:type')
  async findByType(@Param('type') type: string): Promise<Item[] | null> {
    return this.itemService.findByType(type);
  }
  @Get('brand/:brand')
  async findByBrand(@Param('type') brand: string): Promise<Item[] | null> {
    return this.itemService.findByBrand(brand);
  }

  @Put('edit/:id')
  async findOneandEdit(@Body() item: CreateItemDto, @Param('id') id: number) {
    return this.itemService.findOneandUpdate(item, id);
  }
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.itemService.deleteById(id);
  }
}
