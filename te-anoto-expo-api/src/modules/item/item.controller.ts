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
  @Get(':userId')
  async findAll(@Param('userId') userId: number): Promise<Item[]> {
    return this.itemService.findAllByUserId(userId);
  }
  @Get(':itemId')
  async findOne(@Param('itemId') itemId: number): Promise<Item | null> {
    return this.itemService.findOneByPK(itemId);
  }
  @Get('type/:type/:userId')
  async findByType(
    @Param('type') type: string,
    @Param('userId') userId: number,
  ): Promise<Item[] | null> {
    return this.itemService.findByType(type, userId);
  }
  @Get('brand/:brand/:userId')
  async findByBrand(
    @Param('type') brand: string,
    @Param('userid') userId: number,
  ): Promise<Item[] | null> {
    return this.itemService.findByBrand(brand, userId);
  }

  @Put('edit/:itemId/:userId')
  async findOneandEdit(
    @Body() item: CreateItemDto,
    @Param('itemIdid') itemId: number,
    @Param('userId') userId: number,
  ) {
    return this.itemService.findOneandUpdate(item, itemId, userId);
  }
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.itemService.deleteById(id);
  }
}
