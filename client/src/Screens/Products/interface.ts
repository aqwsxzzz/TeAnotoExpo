export interface storePrices {
  id: number;
  price: number;
  itemId: number;
  storeId: number;
}

export interface storePricesWithStoreName {
  id: number;
  price: number;
  storeName: string;
}
