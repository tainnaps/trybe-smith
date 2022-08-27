import jwt from 'jsonwebtoken';
import { secret, options } from '../config/jwt.config';

const generateToken = (username: string, userId: number): string => {
  const token = jwt.sign({ username, userId }, secret, options);

  return token;
};

export default generateToken;
