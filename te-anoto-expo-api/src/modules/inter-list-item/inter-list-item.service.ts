import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { InterListItem } from './inter-list-item.model';
import { CreateInterListItemDto } from './inter-list-item.dto';

@Injectable()
export class InterListItemService {
  constructor(
    @InjectModel(InterListItem)
    private interGroupUsersModel: typeof InterListItem,
  ) {}

  async create(brand: CreateInterListItemDto): Promise<InterListItem> {
    const { groceryListId, itemId } = brand;
    return this.interGroupUsersModel.create({ groceryListId, itemId });
  }

  async deleteByItemId(itemId: number, groceryListId: number): Promise<void> {
    await this.interGroupUsersModel.destroy({
      where: { itemId, groceryListId },
    });
  }
}
