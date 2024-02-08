import {
  AutoIncrement,
  BelongsTo,
  Column,
  ForeignKey,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { User } from '../user/user.model';
import { StorePrice } from '../storeprice/storeprice.model';
import { Brand } from '../brand/brand.model';
import { CreateItemDto } from './item.dto';
import { InterListItem } from '../inter-list-item/inter-list-item.model';

@Table
export class Item extends Model<CreateItemDto> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @Column
  type: string;

  @Column
  quantity: number;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => Brand)
  @Column
  brandId: number;

  @BelongsTo(() => Brand)
  brand: Brand;

  @HasMany(() => StorePrice)
  storePrices: StorePrice[];

  @HasMany(() => InterListItem)
  interListItems: InterListItem[];
}
