import { Secret, SignOptions } from 'jsonwebtoken';

export const secret: Secret = 'supersecret';

export const options: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '1d',
};
