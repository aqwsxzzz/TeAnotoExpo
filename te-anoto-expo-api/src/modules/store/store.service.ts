import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Store } from './store.model';
import { CreateStoreDto } from './store.dto';
import { Sequelize } from 'sequelize-typescript';
import { StorePrice } from '../storeprice/storeprice.model';

@Injectable()
export class StoreService {
  constructor(
    @InjectModel(Store)
    private storeModel: typeof Store,
    private sequelize: Sequelize,
    @InjectModel(StorePrice)
    private storePriceModel: typeof StorePrice,
  ) {}

  async create(store: CreateStoreDto): Promise<Store> {
    const { name, isPublic, userId } = store;
    return isPublic
      ? this.storeModel.create({ name, isPublic })
      : this.storeModel.create({ name, isPublic, userId });
  }

  async findAllPublicNByuserId(userId: number): Promise<Store[]> {
    return this.storeModel.findAll({ where: { isPublic: true || userId } });
  }

  async EditByPk(
    store: CreateStoreDto,
    storeId: number,
  ): Promise<Store | null> {
    const { name } = store;
    try {
      return await this.sequelize.transaction(async (t) => {
        const transactionHost = { transaction: t };

        const storeToUpdate = await this.storeModel.findByPk(
          storeId,
          transactionHost,
        );

        await storeToUpdate?.update({ name }, transactionHost);
        return storeToUpdate;
      });
    } catch (err) {
      return err;
    }
  }

  async deleteById(storeId: number): Promise<void> {
    try {
      return await this.sequelize.transaction(async (t) => {
        const transactionHost = { transaction: t };

        const storeToDelete = await this.storeModel.findByPk(
          storeId,
          transactionHost,
        );
        if (storeToDelete) {
          await storeToDelete.destroy(transactionHost);
          await this.storePriceModel.destroy({
            where: { storeId: storeId },
            transaction: t,
          });
        }
      });
    } catch (err) {
      return err;
    }
  }
}
