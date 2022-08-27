import { Pool, ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { IDatabaseOrder, IBaseOrder } from '../interfaces/order.interface';

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

  public async create(userId: number): Promise<IBaseOrder> {
    const query = 'INSERT INTO Trybesmith.Orders (userId) VALUES (?)';
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(query, [userId]);

    return {
      id: insertId,
      userId,
    };
  }
}

export default OrderModel;
