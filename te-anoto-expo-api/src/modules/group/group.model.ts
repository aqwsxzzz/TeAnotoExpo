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
import { InterGroupUsers } from '../inter-group-users/inter-group-users.model';
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

  @HasMany(() => InterGroupUsers)
  interGroupUsers: InterGroupUsers[];
}
