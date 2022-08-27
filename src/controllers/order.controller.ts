import { Request, Response, NextFunction } from 'express';
import { ICustomRequest } from '../interfaces/request.interface';
import { IProductsOrder } from '../interfaces/order.interface';
import OrderService from '../services/order.service';

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

  public async create(req: ICustomRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      const { productsIds }: IProductsOrder = req.body;

      if (req.user) {
        const { userId } = req.user;
        const order = await this.service.create(productsIds, userId);

        res.status(201).json(order);
      }
    } catch (error) {
      next(error);
    }
  }
}

export default OrderController;
