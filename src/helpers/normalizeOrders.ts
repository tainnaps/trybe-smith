import { IDatabaseOrder, IOrder } from '../interfaces/order';
import removeOrderDuplicates from './removeOrderDuplicates';

const normalizeOrders = (orders: IDatabaseOrder[]): IOrder[] => {
  const normalizedOrders = orders.map(({ id, userId }) => {
    const orderProducts = orders.filter((order) => order.id === id);
    const productsIds = orderProducts.map((order) => order.productId);

    return {
      id,
      userId,
      productsIds,
    };
  });

  const uniqueNormalizedOrders = removeOrderDuplicates(normalizedOrders);

  return uniqueNormalizedOrders;
};

export default normalizeOrders;
