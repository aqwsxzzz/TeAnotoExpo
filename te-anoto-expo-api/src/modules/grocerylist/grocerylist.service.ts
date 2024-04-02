import { Injectable } from '@nestjs/common';
import { GroceryList } from './grocerylist.model';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { CreateGroceryListDto } from './grocerylist.dto';
import { InterListItem } from '../inter-list-item/inter-list-item.model';

@Injectable()
export class GrocerylistService {
  constructor(
    @InjectModel(GroceryList)
    private groceryListModel: typeof GroceryList,
    private sequelize: Sequelize,
    @InjectModel(InterListItem)
    private interListItemModel: typeof InterListItem,
  ) {}

  async create(groceryList: CreateGroceryListDto): Promise<GroceryList> {
    const { name, userId } = groceryList;
    return this.groceryListModel.create({ name, userId });
  }

  async findAllByUserId(userId: number): Promise<GroceryList[]> {
    return this.groceryListModel.findAll({ where: { userId } });
  }

  async findOneandUpdate(
    groceryList: CreateGroceryListDto,
    groceryListId: number,
  ): Promise<void> {
    const { name } = groceryList;

    await this.groceryListModel.update(
      { name },
      { where: { id: groceryListId } },
    );
    // try {
    //   return await this.sequelize.transaction(async (t) => {
    //     const transactionHost = { transaction: t };

    //     const groceryListToUpdate = await this.groceryListModel.findByPk(
    //       groceryListId,
    //       transactionHost,
    //     );

    //     await groceryListToUpdate?.update({ name }, transactionHost);
    //     return groceryListToUpdate;
    //   });
    // } catch (err) {
    //   return err;
    // }
  }

  async deleteById(groceryListId: number): Promise<void> {
    try {
      return await this.sequelize.transaction(async (t) => {
        const transactionHost = { transaction: t };

        const groceryListToDelete = await this.groceryListModel.findByPk(
          groceryListId,
          transactionHost,
        );
        if (groceryListToDelete) {
          await this.interListItemModel.destroy({
            where: { groceryListId },
            transaction: t,
          });
          await groceryListToDelete.destroy(transactionHost);
        }
      });
    } catch (err) {
      return err;
    }
  }
}
