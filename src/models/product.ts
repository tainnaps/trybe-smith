import { Pool } from 'mysql2/promise';
import connection from './connection';
import IProduct from '../interfaces/IProduct';

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
}

export default ProductModel;
