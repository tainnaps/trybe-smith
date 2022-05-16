import CustomError from './CustomError';

export default class UnauthorizedError extends CustomError {
  constructor(message: string) {
    super(message, 401);

    Object.setPrototypeOf(this, UnauthorizedError.prototype);
  }
}
