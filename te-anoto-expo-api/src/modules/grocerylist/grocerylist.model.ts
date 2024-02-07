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
import { Group } from '../group/group.model';
import { InterListItem } from '../inter-list-item/inter-list-item.model';
import { CreateGroceryListDto } from './grocerylist.dto';

@Table
export class GroceryList extends Model<CreateGroceryListDto> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

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

  //   @Index({
  //     unique: true,
  //     where: {
  //       $or: [
  //         { userId: { $not: null }, groupId: { $eq: null } },
  //         { userId: { $eq: null }, groupId: { $not: null } },
  //       ],
  //     },
  //   })
  //   uniqueConnstraint: string;

  @HasMany(() => InterListItem)
  interListItem: InterListItem[];
}
