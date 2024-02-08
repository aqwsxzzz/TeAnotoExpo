import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateBrandDto } from './brand.dto';
import { BrandService } from './brand.service';
import { Brand } from './brand.model';

@Controller('brand')
export class BrandController {
  constructor(private brandService: BrandService) {}

  @Post()
  async create(
    @Body() createItemDto: CreateBrandDto,
  ): Promise<Brand | undefined> {
    return this.brandService.create(createItemDto);
  }
  @Get(':userId')
  async findAllByUserId(@Param('userId') userId: number): Promise<Brand[]> {
    return this.brandService.findAllByUserId(userId);
  }
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Brand | null> {
    return this.brandService.findOneByPK(id);
  }
  @Put('edit/:id')
  async findOneandEdit(@Body() item: CreateBrandDto, @Param('id') id: number) {
    return this.brandService.findOneandUpdate(item, id);
  }
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.brandService.deleteById(id);
  }
}
