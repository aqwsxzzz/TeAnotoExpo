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
    @Body() createBrandDto: CreateBrandDto,
  ): Promise<Brand | undefined> {
    return this.brandService.create(createBrandDto);
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
  async findOneandEdit(
    @Body() brand: CreateBrandDto,
    @Param('id') brandId: number,
  ) {
    return this.brandService.findOneandUpdate(brand, brandId);
  }
  @Delete(':id')
  async delete(@Param('id') brandId: number) {
    return this.brandService.deleteById(brandId);
  }
}
