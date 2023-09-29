import {
  BelongsTo,
  Column,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../user/user.model';
import { StorePrice } from '../storeprice/storeprice.model';

@Table
export class Item extends Model {
  @Column
  name: string;

  @Column
  brand: string;

  @Column
  quantity: number;

  @Column
  type: string;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @HasMany(() => StorePrice)
  storePrices: StorePrice[];
}
