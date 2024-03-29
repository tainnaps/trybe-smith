import jwt from 'jsonwebtoken';
import { secret } from '../config/jwt.config';
import { IUserPayload } from '../interfaces/user.interface';

const verifyToken = (token: string): IUserPayload => {
  const payload = jwt.verify(token, secret);

  return payload as IUserPayload;
};

export default verifyToken;
