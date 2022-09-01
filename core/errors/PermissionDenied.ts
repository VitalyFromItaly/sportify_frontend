import { TCustomError, CustomError, EErrorCodes, EErrorText } from './Domain';

export default class PermissionDenied extends CustomError implements TCustomError {
  message: string;
  name: string = 'Error 403';
  description: string = 'Для просмотра содержания этой страницы необходимы специальные права. Позвоните нам. Мы постараемся помочь.';
  statusCode: EErrorCodes = EErrorCodes.PERMISSION_DENIED;
  type: EErrorText = EErrorText.PERMISSION_DENIED;

  constructor(message: string = 'No Access') {
    super();
    this.message = message;
  }
}
