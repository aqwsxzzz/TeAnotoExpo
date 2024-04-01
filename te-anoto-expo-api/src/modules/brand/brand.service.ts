import { Injectable } from '@nestjs/common';
import { Brand } from './brand.model';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { CreateBrandDto } from './brand.dto';
import { Item } from '../item/item.model';
import { StorePrice } from '../storeprice/storeprice.model';
import { InterListItem } from '../inter-list-item/inter-list-item.model';

@Injectable()
export class BrandService {
  constructor(
    @InjectModel(Brand)
    private brandModel: typeof Brand,
    private sequelize: Sequelize,
    @InjectModel(Item)
    private itemModel: typeof Item,
    @InjectModel(StorePrice)
    private storePricesModel: typeof StorePrice,
    @InjectModel(InterListItem)
    private interListItemModel: typeof InterListItem,
  ) {}

  async create(brand: CreateBrandDto): Promise<Brand> {
    const { name, userId, isPublic } = brand;
    return this.brandModel.create({ name, userId, isPublic });
  }
  async findAllByUserId(userId: number): Promise<Brand[]> {
    return this.brandModel.findAll({ where: { userId } });
  }

  async findAllPublic(): Promise<Brand[]> {
    return this.brandModel.findAll({ where: { isPublic: true } });
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
          const itemsArray: Item[] = await this.itemModel.findAll({
            where: { brandId },
            transaction: t,
          });
          for (const item of itemsArray) {
            await this.storePricesModel.destroy({
              where: { itemId: item.id },
              transaction: t,
            });
            await this.interListItemModel.destroy({
              where: { itemId: item.id },
              transaction: t,
            });
          }
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
