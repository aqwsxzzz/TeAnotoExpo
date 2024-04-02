import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { GrocerylistService } from './grocerylist.service';
import { CreateGroceryListDto } from './grocerylist.dto';
import { GroceryList } from './grocerylist.model';

@Controller('grocerylist')
export class GrocerylistController {
  constructor(private grocerylistService: GrocerylistService) {}

  @Post()
  async create(
    @Body() CreateGroceryListDto: CreateGroceryListDto,
  ): Promise<GroceryList | undefined> {
    return this.grocerylistService.create(CreateGroceryListDto);
  }
  @Get(':userId')
  async findAllByuserId(
    @Param('userId') userId: number,
  ): Promise<GroceryList[]> {
    return this.grocerylistService.findAllByUserId(userId);
  }
  @Put('edit/:groceryListId')
  async findOneandEdit(
    @Body() groceryList: CreateGroceryListDto,
    @Param('groceryListId') groceryListId: number,
  ) {
    return this.grocerylistService.findOneandUpdate(groceryList, groceryListId);
  }

  @Delete(':groceryListId')
  async delete(@Param('groceryListId') groceryListId: number) {
    return this.grocerylistService.deleteById(groceryListId);
  }
}
