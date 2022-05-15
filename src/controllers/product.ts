import { Request, Response, NextFunction } from 'express';
import ProductService from '../services/product';
import { INewProduct, IProduct } from '../interfaces/product';

class ProductController {
  private service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  public async getAll(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const products: IProduct[] = await this.service.getAll();

      res.status(200).json(products);
    } catch (error) {
      next(error);
    }
  }

  public async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { name, amount }: INewProduct = req.body;
      const product: IProduct = await this.service.create({ name, amount });

      res.status(201).json(product);
    } catch (error) {
      next(error);
    }
  }
}

export default ProductController;
