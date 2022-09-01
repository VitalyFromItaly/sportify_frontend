import { TCustomError, CustomError, EErrorText, EErrorCodes } from './Domain';
export default class InternalServerError extends CustomError implements TCustomError {
  message: string;
  name: string = 'Ошибка 500';
  description: string = 'В настоящий момент на сервере проводятся технические работы! Пожалуйста, попробуйте обновить страницу через 5 минут. Приносим извинения за доставленные неудобства.';
  statusCode: EErrorCodes = EErrorCodes.INTERNAL_SERVER_ERROR;
  type: EErrorText = EErrorText.INTERNAL_SERVER_ERROR;
  isLinkShown: boolean = true;

  constructor(message: string = 'На сервере проводятся технические работы.') {
    super();
    this.message = message;
  }
}
