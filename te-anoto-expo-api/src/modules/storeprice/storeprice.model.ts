import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { ItemforPrices } from '../itemforPrices/item.model';
import { Store } from '../store/store.model';

@Table
export class StorePrice extends Model {
  @Column
  price: number;

  @ForeignKey(() => ItemforPrices)
  @Column
  itemForPricesId: number;

  @BelongsTo(() => ItemforPrices)
  itemForPrices: ItemforPrices;

  @ForeignKey(() => Store)
  @Column
  storeId: number;

  @BelongsTo(() => Store)
  store: Store;
}
