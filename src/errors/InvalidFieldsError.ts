import CustomError from './CustomError';

export default class InvalidFieldsError extends CustomError {
  constructor(message: string) {
    super(message, 422);

    Object.setPrototypeOf(this, InvalidFieldsError.prototype);
  }
}
