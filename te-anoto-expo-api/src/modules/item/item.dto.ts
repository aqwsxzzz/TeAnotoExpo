export class CreateItemDto {
  id?: number;
  name: string;
  quantity: number;
  type: string;
  brandId: number;
  userId?: number;
  groupId?: number;
}
