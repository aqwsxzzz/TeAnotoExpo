import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ItemforPrices } from './item.model';
import { CreateItemforPricesDto } from './item.dto';
import { Sequelize } from 'sequelize-typescript';
import { StorePrice } from '../storeprice/storeprice.model';

@Injectable()
export class ItemService {
  constructor(
    @InjectModel(ItemforPrices)
    private itemforPricesModel: typeof ItemforPrices,
    private sequelize: Sequelize,
    @InjectModel(StorePrice)
    private storePriceModel: typeof StorePrice,
  ) {}

  async create(item: CreateItemforPricesDto): Promise<ItemforPrices> {
    const { name, brandId, type, userId } = item;
    return this.itemforPricesModel.create({ name, brandId, type, userId });
  }
  async findAll(): Promise<ItemforPrices[]> {
    return this.itemforPricesModel.findAll();
  }

  async findOneByPK(itemId: number): Promise<ItemforPrices | null> {
    return this.itemforPricesModel.findByPk(itemId);
  }

  async findByType(type: string): Promise<ItemforPrices[]> {
    return this.itemforPricesModel.findAll({ where: { type } });
  }

  async findByBrand(brandId: string): Promise<ItemforPrices[]> {
    return this.itemforPricesModel.findAll({ where: { brandId } });
  }

  async findOneandUpdate(
    item: CreateItemforPricesDto,
    itemId: number,
  ): Promise<ItemforPrices | null> {
    const { name, brandId, type } = item;

    try {
      return await this.sequelize.transaction(async (t) => {
        const transactionHost = { transaction: t };

        const itemToUpdate = await this.itemforPricesModel.findByPk(
          itemId,
          transactionHost,
        );

        await itemToUpdate?.update({ name, brandId, type }, transactionHost);
        return itemToUpdate;
      });
    } catch (err) {
      return err;
    }
  }
  async deleteById(itemId: number): Promise<void> {
    try {
      return await this.sequelize.transaction(async (t) => {
        const transactionHost = { transaction: t };

        const itemToDelete = await this.itemforPricesModel.findByPk(
          itemId,
          transactionHost,
        );
        if (itemToDelete) {
          await this.storePriceModel.destroy({
            where: { itemId: itemId },
            transaction: t,
          });
          await itemToDelete.destroy(transactionHost);
        }
      });
    } catch (err) {
      return err;
    }
  }
}
