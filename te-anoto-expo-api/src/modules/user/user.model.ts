import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Item } from '../item/item.model';

@Table
export class User extends Model {
  @Column
  username: string;

  @Column
  email: string;

  @Column
  password: string;

  @HasMany(() => Item)
  items: Item[];
}
