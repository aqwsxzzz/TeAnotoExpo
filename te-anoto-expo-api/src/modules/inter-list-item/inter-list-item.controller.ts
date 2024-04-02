import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { InterListItemService } from './inter-list-item.service';
import { CreateInterListItemDto } from './inter-list-item.dto';
import { InterListItem } from './inter-list-item.model';

@Controller('inter-list-item')
export class InterListItemController {
  constructor(private interListItemService: InterListItemService) {}

  @Post()
  async create(
    @Body() CreateInterListItemDto: CreateInterListItemDto,
  ): Promise<InterListItem | undefined> {
    return this.interListItemService.create(CreateInterListItemDto);
  }

  @Get(':groceryListId')
  async findAllByGroceryListId(
    @Param('groceryListId') groceryListId: number,
  ): Promise<InterListItem[]> {
    return this.interListItemService.findAllByGroceryListId(groceryListId);
  }

  @Delete()
  async deleteByItemNgroceryId(
    @Body() CreateInterListItemDto: CreateInterListItemDto,
  ): Promise<void> {
    return this.interListItemService.deleteByItemNgroceryId(
      CreateInterListItemDto,
    );
  }
}
