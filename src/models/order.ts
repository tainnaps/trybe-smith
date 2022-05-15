import { Pool } from 'mysql2/promise';
import connection from './connection';
import { IDatabaseOrder } from '../interfaces/order';

class OrderModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async getAll(): Promise<IDatabaseOrder[]> {
    const query = `
      SELECT o.id, o.userId, p.id AS productId
      FROM Trybesmith.Orders AS o
      INNER JOIN Trybesmith.Products AS p ON p.orderId = o.id
    `;
    const [orders] = await this.connection.execute(query);

    return orders as IDatabaseOrder[];
  }
}

export default OrderModel;
