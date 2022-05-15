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

  public async create(product: IProduct) {
    const createdProduct: IProduct = await this.model.create(product);

    return createdProduct;
  }
}

export default ProductService;
