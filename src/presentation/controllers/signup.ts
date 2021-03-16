import {
  httpResponse,
  httpRequest,
  Controller,
  EmailValidator,
} from '../protocols';
import { MissingParamError, InvalidParamError } from '../erros';
import { badRequest, serverError } from '../helpers/http-helpers';

export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator;

  constructor(emailValidator: EmailValidator) {
    this.emailValidator = emailValidator;
  }

  handle(httpRequest: httpRequest): httpResponse {
    try {
      const requiredFilds = [
        'name',
        'email',
        'password',
        'passwordConfirmation',
      ];
      for (const field of requiredFilds) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field));
        }
      }

      const { email, password, passwordConfirmation } = httpRequest.body;

      if (password !== passwordConfirmation) {
        return badRequest(new InvalidParamError('passwordConfirmation'));
      }

      const isValid = this.emailValidator.isValid(email);

      if (!isValid) {
        return badRequest(new InvalidParamError('email'));
      }
    } catch (err) {
      return serverError();
    }
  }
}
