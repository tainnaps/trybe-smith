import jwt from 'jsonwebtoken';
import { secret, options } from '../config/jwt';

const generateToken = (username: string): string => {
  const token = jwt.sign({ payload: username }, secret, options);

  return token;
};

export default generateToken;
