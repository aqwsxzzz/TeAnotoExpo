import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Item } from '../itemforPrices/item.model';
import { Store } from '../store/store.model';

@Table
export class StorePrice extends Model {
  @Column
  price: number;

  @ForeignKey(() => Item)
  @Column
  itemForPricesId: number;

  @BelongsTo(() => Item)
  itemForPrices: Item;

  @ForeignKey(() => Store)
  @Column
  storeId: number;

  @BelongsTo(() => Store)
  store: Store;
}
