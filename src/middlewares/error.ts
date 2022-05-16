import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import CustomError from '../errors/CustomError';

/*
  | REFERENCES |
  Utilizei o link abaixo como referência para construir um middleware de erro que recebe erros customizados estendidos da classe Error.
  link: https://medium.com/pagarme/minha-experi%C3%AAncia-com-error-handling-no-express-188534ae6ff2
*/

export default (err: ErrorRequestHandler, _req: Request, res: Response, _next: NextFunction)
: Response => {
  if (err instanceof CustomError) {
    return res.status(err.code).json({ message: err.message });
  }

  console.error(err);
  return res.status(500).json({ message: 'Internal server error' });
};
