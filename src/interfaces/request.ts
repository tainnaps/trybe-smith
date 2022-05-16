import { Request } from 'express';
import { IUserPayload } from './user';

/*
  | REFERENCES |
  Utilizei o link abaixo como referência para criar uma interface customizada de request que me
  permitisse ter todas as propriedades padrão do request do express e ainda me permitisse ter a
  propriedade personalizada user dentro do objeto de request.
  link: https://www.kindacode.com/article/express-typescript-extending-request-and-response-objects/
*/

export interface ICustomRequest extends Request {
  user?: IUserPayload;
}
