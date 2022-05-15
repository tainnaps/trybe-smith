import OrderModel from '../models/order';
import { IOrder } from '../interfaces/order';
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
}

export default OrderService;
