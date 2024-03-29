import { Pool, ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { INewProduct, IProduct } from '../interfaces/product.interface';

class ProductModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async getAll(): Promise<IProduct[]> {
    const query = 'SELECT * FROM Trybesmith.Products';
    const [products] = await this.connection.execute(query);

    return products as IProduct[];
  }

  public async create(product: INewProduct): Promise<IProduct> {
    const { name, amount } = product;
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(query, [name, amount]);

    return {
      id: insertId,
      name,
      amount,
    };
  }

  public async updateOrderId(productId: number, orderId: number): Promise<void> {
    const query = 'UPDATE Trybesmith.Products SET orderId=? WHERE id=?';
    await this.connection.execute(query, [orderId, productId]);
  }
}

export default ProductModel;
