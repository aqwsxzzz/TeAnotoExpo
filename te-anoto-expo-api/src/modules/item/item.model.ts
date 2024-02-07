import {
  AutoIncrement,
  BelongsTo,
  Column,
  ForeignKey,
  HasMany,
  Index,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { User } from '../user/user.model';
import { StorePrice } from '../storeprice/storeprice.model';
import { Brand } from '../brand/brand.model';
import { Group } from '../group/group.model';
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

  @ForeignKey(() => Group)
  @Column
  groupId: number;

  @BelongsTo(() => Group)
  group: Group;

  // @Index({
  //   unique: true,
  //   where: {
  //     $or: [
  //       { userId: { $not: null }, groupId: { $eq: null } },
  //       { userId: { $eq: null }, groupId: { $not: null } },
  //     ],
  //   },
  // })
  // uniqueConnstraint: string;

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
