import OrderModel from '../models/order';
import ProductModel from '../models/product';
import { INewOrder, IOrder } from '../interfaces/order';
import normalizeOrders from '../helpers/normalizeOrders';

class OrderService {
  private model: OrderModel;

  constructor() {
    this.model = new OrderModel();
  }

  public async getAll(): Promise<IOrder[]> {
    const orders = await this.model.getAll();
    const normalizedOrders = normalizeOrders(orders);

    return normalizedOrders;
  }

  public async create(productsIds: number[], userId: number): Promise<INewOrder> {
    const { id } = await this.model.create(userId);
    const productModel = new ProductModel();
    const updatePromises = productsIds
      .map((productId) => productModel.updateOrderId(productId, id));

    await Promise.all(updatePromises);

    return {
      userId,
      productsIds,
    };
  }
}

export default OrderService;
