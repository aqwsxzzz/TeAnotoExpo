import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Item } from './item.model';
import { CreateItemDto } from './item.dto';
import { Sequelize } from 'sequelize-typescript';
import { StorePrice } from '../storeprice/storeprice.model';

@Injectable()
export class ItemService {
  constructor(
    @InjectModel(Item)
    private itemModel: typeof Item,
    private sequelize: Sequelize,
    @InjectModel(StorePrice)
    private storePriceModel: typeof StorePrice,
  ) {}

  async create(item: CreateItemDto): Promise<Item> {
    const { name, brandId, quantity, type, userId } = item;
    return this.itemModel.create({ name, brandId, quantity, type, userId });
  }
  async findAll(): Promise<Item[]> {
    return this.itemModel.findAll();
  }

  async findOneByPK(itemId: number): Promise<Item | null> {
    return this.itemModel.findByPk(itemId);
  }

  async findByType(type: string): Promise<Item[]> {
    return this.itemModel.findAll({ where: { type } });
  }

  async findByBrand(brandId: string): Promise<Item[]> {
    return this.itemModel.findAll({ where: { brandId } });
  }

  async findOneandUpdate(
    item: CreateItemDto,
    itemId: number,
  ): Promise<Item | null> {
    const { name, brandId, quantity, type } = item;

    try {
      return await this.sequelize.transaction(async (t) => {
        const transactionHost = { transaction: t };

        const itemToUpdate = await this.itemModel.findByPk(
          itemId,
          transactionHost,
        );

        await itemToUpdate?.update(
          { name, brandId, quantity, type },
          transactionHost,
        );
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

        const itemToDelete = await this.itemModel.findByPk(
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
