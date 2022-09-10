import InternalServerError from '../errors/InternalServerError';
import UnknownServerError from '../errors/UnknownServerError';
import NotFound from '../errors/NotFound';
import PermissionDenied from '../errors/PermissionDenied';
import Unauthorized from '../errors/Unauthorized';
export default (status: number): void => {
  switch (status) {
    case 401 : throw new Unauthorized();
    case 403: throw new PermissionDenied();
    case 404: throw new NotFound();
    case 500: throw new InternalServerError();
    case 520: throw new UnknownServerError();
    default: throw new NotFound();
  }
};
