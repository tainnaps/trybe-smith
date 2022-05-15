import { Request, Response, NextFunction } from 'express';
import ProductService from '../services/product';
import IProduct from '../interfaces/IProduct';

class ProductController {
  private service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  public async getAll(_req: Request, res: Response): Promise<void> {
    try {
      const products: IProduct[] = await this.service.getAll();

      res.status(200).json(products);
    } catch (error) {
      console.log(error);

      res.status(500).json({ message: 'Internal server error' });
    }
  }

  public async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { name, amount } = req.body;
      const product = await this.service.create({ name, amount });

      res.status(201).json(product);
    } catch (error) {
      next(error);
    }
  }
}

export default ProductController;
