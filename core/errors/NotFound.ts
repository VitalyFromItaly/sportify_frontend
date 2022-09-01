import { TCustomError, CustomError, EErrorCodes, EErrorText } from './Domain';
export default class NotFound extends CustomError implements TCustomError {
  message: string;
  name: string = 'Ошибка 404';
  description: string = 'Вы перешли на страницу, которой не существует, была удалена или перемещена по другому адресу.';
  statusCode: EErrorCodes = EErrorCodes.NOT_FOUND;
  type: EErrorText = EErrorText.NOT_FOUND;
  isLinkShown: boolean = true;

  constructor(message: string = 'Страница не найдена') {
    super();
    this.message = message;
  }
}
