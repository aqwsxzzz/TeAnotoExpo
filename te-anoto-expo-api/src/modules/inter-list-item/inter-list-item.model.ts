import {
  AutoIncrement,
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { GroceryList } from '../grocerylist/grocerylist.model';
import { Item } from '../item/item.model';
import { CreateInterListItemDto } from './inter-list-item.dto';

@Table
export class InterListItem extends Model<CreateInterListItemDto> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @ForeignKey(() => GroceryList)
  @Column
  groceryListId: number;

  @BelongsTo(() => GroceryList)
  groceryList: GroceryList;

  @ForeignKey(() => Item)
  @Column
  itemId: number;

  @BelongsTo(() => Item)
  item: Item;
}
