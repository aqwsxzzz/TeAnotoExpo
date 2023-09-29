import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { StorePrice } from './storeprice.model';
import { CreateStorePriceDto } from './storeprice.dto';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class StorepriceService {
  constructor(
    @InjectModel(StorePrice)
    private storepriceModel: typeof StorePrice,
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
  async deleteByItemId(itemId: number): Promise<void> {
    await this.storepriceModel.destroy({
      where: { itemId: itemId },
    });
  }
}
