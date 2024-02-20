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
}
