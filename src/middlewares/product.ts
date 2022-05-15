import { Request, Response, NextFunction } from 'express';
import IProduct from '../interfaces/IProduct';
import productSchema from '../schemas/product';
import getCustomError from '../helpers/getCustomError';

const validateProduct = (req: Request, _res: Response, next: NextFunction): void => {
  const { name, amount }: IProduct = req.body;
  const { error } = productSchema.validate({ name, amount });

  if (error) {
    const customError = getCustomError(error);
    return next(customError);
  }

  next();
};

export default validateProduct;
