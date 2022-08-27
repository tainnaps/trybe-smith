import { INewProduct, IProduct } from '../interfaces/product.interface';
import ProductModel from '../models/product.model';

class ProductService {
  private model: ProductModel;

  constructor() {
    this.model = new ProductModel();
  }

  public async getAll(): Promise<IProduct[]> {
    const products: IProduct[] = await this.model.getAll();

    return products;
  }

  public async create(product: INewProduct) {
    const createdProduct: IProduct = await this.model.create(product);

    return createdProduct;
  }
}

export default ProductService;
