import { CustomError, TCustomError, EErrorText, EErrorCodes } from './Domain';
export default class Unauthorized extends CustomError implements TCustomError {
  message: string;
  name: string = 'Ошибка 401';
  description: string = 'Вы перешли на страницу, для которой требуется авторизация.';
  statusCode: EErrorCodes = EErrorCodes.UNAUTHORIZED;
  type: EErrorText = EErrorText.UNAUTHORIZED;
  isLinkShown: boolean = false;

  constructor(message: string = 'Авторизация не пройдена') {
    super();
    this.message = message;
  }
}
