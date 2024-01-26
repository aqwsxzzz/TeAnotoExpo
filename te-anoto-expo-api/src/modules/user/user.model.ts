import {
  AutoIncrement,
  Column,
  DataType,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { ItemforPrices } from '../itemforPrices/item.model';

@Table
export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Column
  username: string;

  @Column
  email: string;

  @Column
  password: string;

  @HasMany(() => ItemforPrices)
  items: ItemforPrices[];
}
