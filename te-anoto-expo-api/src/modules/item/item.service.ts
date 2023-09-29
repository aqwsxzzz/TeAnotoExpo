import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Item } from './item.model';
import { CreateItemDto } from './item.dto';
import { Sequelize } from 'sequelize-typescript';
import { StorePrice } from '../storeprice/storeprice.model';
//import { StorepriceService } from '../storeprice/storeprice.service';

@Injectable()
export class ItemService {
  constructor(
    @InjectModel(Item)
    private itemModel: typeof Item,
    private sequelize: Sequelize,
    @InjectModel(StorePrice)
    private storePriceModel: typeof StorePrice,
  ) {}
  //private storePriceService: StorepriceService,

  async create(item: CreateItemDto): Promise<Item> {
    const { name, brand, quantity, userId } = item;
    return this.itemModel.create({ name, brand, quantity, userId });
  }
  async findAll(): Promise<Item[]> {
    return this.itemModel.findAll();
  }

  async findOneandUpdate(
    item: CreateItemDto,
    itemId: number,
  ): Promise<Item | null> {
    const { name, brand, quantity } = item;

    try {
      return await this.sequelize.transaction(async (t) => {
        const transactionHost = { transaction: t };

        const itemToUpdate = await this.itemModel.findByPk(
          itemId,
          transactionHost,
        );

        await itemToUpdate?.update({ name, brand, quantity }, transactionHost);
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
          await itemToDelete.destroy(transactionHost);
          await this.storePriceModel.destroy({
            where: { itemId: itemId },
            transaction: t,
          });
          //await this.storePriceService.deleteByItemId(itemId);
        }
      });
    } catch (err) {
      return err;
    }
  }
}
