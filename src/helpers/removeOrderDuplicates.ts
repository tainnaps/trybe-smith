import { IOrder } from '../interfaces/order';

/*
  | REFERENCE |
  Usei o link abaixo como referĂȘncia para remover itens repetidos num array de objetos.
  link: https://dev.to/marinamosti/removing-duplicates-in-an-array-of-objects-in-js-with-sets-3fep
*/

const removeOrderDuplicates = (orders: IOrder[]): IOrder[] => {
  const ordersIds = Array.from(new Set(orders.map(({ id }) => id)));

  const uniqueOrders = ordersIds.map((orderId) => {
    const index = orders.findIndex(({ id }) => id === orderId);
    return orders[index];
  });

  return uniqueOrders;
};

export default removeOrderDuplicates;
