import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Store } from './store.model';
import { CreateStoreDto } from './store.dto';

@Injectable()
export class StoreService {
  constructor(
    @InjectModel(Store)
    private storeModel: typeof Store,
  ) {}

  async create(store: CreateStoreDto): Promise<Store> {
    const { name } = store;
    return this.storeModel.create({ name });
  }
}
