import { Column, Table, Model, HasMany } from 'sequelize-typescript';
import { StorePrice } from '../storeprice/storeprice.model';

@Table
export class Store extends Model {
  @Column
  name: string;

  @HasMany(() => StorePrice)
  storePrices: StorePrice[];
}
