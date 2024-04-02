import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { InterListItem } from './inter-list-item.model';
import { CreateInterListItemDto } from './inter-list-item.dto';

@Injectable()
export class InterListItemService {
  constructor(
    @InjectModel(InterListItem)
    private interListItemModel: typeof InterListItem,
  ) {}

  async create(interListItem: CreateInterListItemDto): Promise<InterListItem> {
    const { groceryListId, itemId } = interListItem;
    return this.interListItemModel.create({ groceryListId, itemId });
  }

  async findAllByGroceryListId(
    groceryListId: number,
  ): Promise<InterListItem[]> {
    return this.interListItemModel.findAll({ where: { groceryListId } });
  }

  async deleteByItemNgroceryId(
    interListItem: CreateInterListItemDto,
  ): Promise<void> {
    await this.interListItemModel.destroy({
      where: {
        itemId: interListItem.itemId,
        groceryListId: interListItem.groceryListId,
      },
    });
  }
}
