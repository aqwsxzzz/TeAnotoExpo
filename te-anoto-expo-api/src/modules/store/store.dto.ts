export class CreateStoreDto {
  id?: number;
  name: string;
  isPublic: boolean;
  userId?: number;
  groupId?: number;
}
