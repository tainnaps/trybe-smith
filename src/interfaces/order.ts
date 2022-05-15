export interface IBaseOrder {
  id: number;
  userId: number;
}

export interface IDatabaseOrder extends IBaseOrder {
  productId: number;
}

export interface IOrder extends IBaseOrder {
  productsIds: number[];
}
