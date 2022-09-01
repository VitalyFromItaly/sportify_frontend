import { TCustomError, CustomError, EErrorCodes, EErrorText } from './Domain';

export default class UnknownServerError extends CustomError implements TCustomError {
  message: string;
  name: string = 'Ошибка 520';
  description: string = 'Ошибка на стороне сервера. Позвоните нам, мы постараемся помочь.';
  statusCode: EErrorCodes = EErrorCodes.UNKNOWN_SERVER_ERROR;
  type: EErrorText = EErrorText.UNKNOWN_SERVER_ERROR;
  isLinkShown: boolean = true;

  constructor(message: string = 'Неизвестная ошибка сервера') {
    super();
    this.message = message;
  }
}
