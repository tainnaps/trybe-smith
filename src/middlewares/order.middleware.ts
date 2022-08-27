import { Request, Response, NextFunction } from 'express';
import getCustomError from '../helpers/getCustomError';
import { IProductsOrder } from '../interfaces/order.interface';
import orderSchema from '../schemas/order.schema';

const validateOrder = (req: Request, _res: Response, next: NextFunction): void => {
  const { productsIds }: IProductsOrder = req.body;
  const { error } = orderSchema.validate({ productsIds });

  if (error) {
    const customError = getCustomError(error);
    return next(customError);
  }

  next();
};

export default validateOrder;
