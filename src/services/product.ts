import IProduct from '../interfaces/IProduct';
import ProductModel from '../models/product';

class ProductService {
  private model: ProductModel;

  constructor() {
    this.model = new ProductModel();
  }

  public async getAll(): Promise<IProduct[]> {
    const products: IProduct[] = await this.model.getAll();

    return products;
  }
}

export default ProductService;
