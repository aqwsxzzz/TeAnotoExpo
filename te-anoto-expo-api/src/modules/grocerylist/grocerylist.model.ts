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

  @HasMany(() => InterListItem)
  interListItem: InterListItem[];
}
