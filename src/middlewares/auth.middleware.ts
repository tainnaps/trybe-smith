import { Response, NextFunction } from 'express';
import { ICustomRequest } from '../interfaces/request.interface';
import UnauthorizedError from '../errors/unauthorized.error';
import verifyToken from '../helpers/verifyToken';

const validateToken = (req: ICustomRequest, _res: Response, next: NextFunction): void => {
  try {
    const { authorization: token } = req.headers;

    if (!token) {
      return next(new UnauthorizedError('Token not found'));
    }

    const payload = verifyToken(token);

    req.user = payload;

    next();
  } catch (error) {
    next(new UnauthorizedError('Invalid token'));
  }
};

export default validateToken;
