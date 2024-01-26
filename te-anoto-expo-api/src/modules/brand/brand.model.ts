import {
  BelongsTo,
  Column,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../user/user.model';
import { ItemforPrices } from '../itemforPrices/item.model';

@Table
export class Brand extends Model {
  @Column
  name: string;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @HasMany(() => ItemforPrices)
  storePrices: ItemforPrices[];
}
