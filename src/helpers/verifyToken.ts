import jwt from 'jsonwebtoken';
import { secret } from '../config/jwt';
import { IUserPayload } from '../interfaces/user';

const verifyToken = (token: string): IUserPayload => {
  const payload = jwt.verify(token, secret);

  return payload as IUserPayload;
};

export default verifyToken;
