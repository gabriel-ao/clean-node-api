import { httpResponse, httpRequest } from '../protocols/http';
import { MissingParamError } from '../erros/missing-param-error';

import { badRequest } from '../helpers/http-helpers';
export class SignUpController {
  handle(httpRequest: httpRequest): httpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError('name'));
    }

    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError('email'));
    }
  }
}
