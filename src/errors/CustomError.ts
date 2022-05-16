/*
  | REFERENCES |
  Utilizei os links abaixo como referência para criar erros customizados, que estendem da classe Error.
  Os links também me deram a base para entender e resolver o problema do não funcionamento correto de "instanceof" no middleware de erro para checar se o erro recebido era ou não uma instância dos meus erros customizados. Esse problema ocorreu no meu código em virtude do projeto ser configurado para compilar o código para ES5 e por eu ter estendido da classe Error nesse contexto. O conjunto dessas circunstâncias fez com que instâncias das minhas classes de erros customizados perdessem seus prototypes. Para corrigir esse comportamento, usei como solução, apontada pela Microsoft, definir manualmente o prototype de todas minhas subclasses.

  Links:
  https://github.com/willianmarquess/artigo-erros-nodejs
  https://bobbyhadz.com/blog/typescript-extend-error-class
  https://github.com/Microsoft/TypeScript-wiki/blob/main/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
  https://medium.com/pagarme/minha-experi%C3%AAncia-com-error-handling-no-express-188534ae6ff2
  https://www.dannyguo.com/blog/how-to-fix-instanceof-not-working-for-custom-errors-in-typescript/
*/

export default class CustomError extends Error {
  code: number;

  constructor(message: string, code: number) {
    super(message);

    Object.setPrototypeOf(this, CustomError.prototype);

    this.code = code;
  }
}
