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

  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<string> {
    return `1 item by his #${id}`;
  }
  @Post()
  async create(
    @Body() createItemDto: CreateItemDto,
  ): Promise<Item | undefined> {
    return this.itemService.create(createItemDto);
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
