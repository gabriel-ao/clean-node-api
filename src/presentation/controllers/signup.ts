import { httpResponse, httpRequest } from '../protocols/http';
import { MissingParamError } from '../erros/missing-param-error';
import { badRequest } from '../helpers/http-helpers';
import { Controller } from '../protocols/controller';

export class SignUpController implements Controller {
  handle(httpRequest: httpRequest): httpResponse {
    const requiredFilds = ['name', 'email', 'password', 'passwordConfirmation'];
    for (const field of requiredFilds) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }
  }
}
