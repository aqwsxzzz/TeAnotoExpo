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
import { Brand } from '../brand/brand.model';
import { InterGroupUsers } from '../inter-group-users/inter-group-users.model';
import { Item } from '../item/item.model';
import { Store } from '../store/store.model';
import { GroceryList } from '../grocerylist/grocerylist.model';
import { CreateGroupDto } from './group.dto';

@Table
export class Group extends Model<CreateGroupDto> {
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

  @HasMany(() => Brand)
  brand: Brand[];

  @HasMany(() => InterGroupUsers)
  interGroupUsers: InterGroupUsers[];

  @HasMany(() => Item)
  item: Item[];

  @HasMany(() => Store)
  store: Store[];

  @HasMany(() => GroceryList)
  groceryList: GroceryList[];
}
