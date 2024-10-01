import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { StorePrice } from './storeprice.model';
import { CreateStorePriceDto } from './storeprice.dto';
import { Sequelize } from 'sequelize-typescript';
import { Store } from '../store/store.model';
import { StorePriceWithStoreName } from './interfaces';

@Injectable()
export class StorepriceService {
  constructor(
    @InjectModel(StorePrice)
    private storepriceModel: typeof StorePrice,
    @InjectModel(Store)
    private storeModel: typeof Store,
    private sequelize: Sequelize,
  ) {}

  async create(storeprice: CreateStorePriceDto): Promise<StorePrice> {
    const { price, itemId, storeId } = storeprice;
    return this.storepriceModel.create({ price, itemId, storeId });
  }

  async findOneandUpdate(
    storePrice: CreateStorePriceDto,
    storePriceId: number,
  ): Promise<StorePrice | null> {
    const { price } = storePrice;

    try {
      return await this.sequelize.transaction(async (t) => {
        const transactionHost = { transaction: t };

        const storePriceToUpdate = await this.storepriceModel.findByPk(
          storePriceId,
          transactionHost,
        );

        await storePriceToUpdate?.update({ price }, transactionHost);
        return storePriceToUpdate;
      });
    } catch (err) {
      return err;
    }
  }

  async findByItemId(itemId: number): Promise<StorePriceWithStoreName[]> {
    const response: StorePriceWithStoreName[] = [];
    const storesArray = await this.storepriceModel.findAll({
      where: { itemId },
    });

    for (const item of storesArray) {
      const storeName = await this.storeModel.findByPk(item.dataValues.storeId);

      if (storeName) {
        response.push({
          id: item.id,
          price: item.dataValues.price,
          storeName: storeName.name,
        });
      }
    }
    console.log(response);

    return await response;
  }

  async findByStoreId(storeId: number): Promise<StorePrice[]> {
    return this.storepriceModel.findAll({ where: { storeId } });
  }

  async deleteById(storePriceId: number): Promise<void> {
    try {
      return await this.sequelize.transaction(async (t) => {
        const transactionHost = { transaction: t };

        const storePriceToDelete = await this.storepriceModel.findByPk(
          storePriceId,
          transactionHost,
        );
        if (storePriceToDelete) {
          await storePriceToDelete.destroy(transactionHost);
        }
      });
    } catch (err) {
      return err;
    }
  }
}
