import { ValidationError } from 'joi';
import InvalidFieldsError from '../errors/InvalidFieldsError';
import RequiredFieldsError from '../errors/RequiredFieldsError';
import CustomError from '../errors/CustomError';

const getCustomError = (error: ValidationError): CustomError => {
  const { type, message } = error.details[0];

  switch (type) {
    case 'any.required':
      return new RequiredFieldsError(message);
    default:
      return new InvalidFieldsError(message);
  }
};

export default getCustomError;
