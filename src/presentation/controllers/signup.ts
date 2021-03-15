import { httpResponse, httpRequest } from '../protocols/http';
import { MissingParamError } from '../erros/missing-param-error';
import { InvalidParamError } from '../erros/invalid-param-error';
import { badRequest } from '../helpers/http-helpers';
import { Controller } from '../protocols/controller';
import { EmailValidator } from '../protocols/email-validator';
import { ServerError } from '../erros/server-error';

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

      const isValid = this.emailValidator.isValid(httpRequest.body.email);

      if (!isValid) {
        return badRequest(new InvalidParamError('email'));
      }
    } catch (err) {
      return {
        statusCode: 500,
        body: new ServerError(),
      };
    }
  }
}
