import { Request, Response, NextFunction } from 'express';
import OrderService from '../services/order';
// import { IOrder } from '../interfaces/order';

class OrderController {
  private service: OrderService;

  constructor() {
    this.service = new OrderService();
  }

  public async getAll(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const orders = await this.service.getAll();

      res.status(200).json(orders);
    } catch (error) {
      next(error);
    }
  }
}

export default OrderController;
