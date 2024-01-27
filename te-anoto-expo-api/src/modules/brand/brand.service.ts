import { Injectable } from '@nestjs/common';
import { Brand } from './brand.model';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { CreateBrandDto } from './brand.dto';
import { Item } from '../item/item.model';

@Injectable()
export class BrandService {
  constructor(
    @InjectModel(Brand)
    private brandModel: typeof Brand,
    private sequelize: Sequelize,
    @InjectModel(Item)
    private itemModel: typeof Item,
  ) {}

  async create(brand: CreateBrandDto): Promise<Brand> {
    const { name, userId } = brand;
    return this.brandModel.create({ name, userId });
  }
  async findAll(): Promise<Brand[]> {
    return this.brandModel.findAll();
  }

  async findOneByPK(brandId: number): Promise<Brand | null> {
    return this.brandModel.findByPk(brandId);
  }

  async findOneandUpdate(
    brand: CreateBrandDto,
    brandId: number,
  ): Promise<Brand | null> {
    const { name } = brand;

    try {
      return await this.sequelize.transaction(async (t) => {
        const transactionHost = { transaction: t };

        const brandToUpdate = await this.brandModel.findByPk(
          brandId,
          transactionHost,
        );

        await brandToUpdate?.update({ name }, transactionHost);
        return brandToUpdate;
      });
    } catch (err) {
      return err;
    }
  }
  async deleteById(brandId: number): Promise<void> {
    try {
      return await this.sequelize.transaction(async (t) => {
        const transactionHost = { transaction: t };

        const brandToDelete = await this.brandModel.findByPk(
          brandId,
          transactionHost,
        );
        if (brandToDelete) {
          await this.itemModel.destroy({
            where: { brandId },
            transaction: t,
          });
          await brandToDelete.destroy(transactionHost);
        }
      });
    } catch (err) {
      return err;
    }
  }
}
