import {
  httpResponse,
  httpRequest,
  Controller,
  EmailValidator,
  AddAccount
} from './signup-protocols';
import { MissingParamError, InvalidParamError } from '../../erros';
import { badRequest, serverError } from '../../helpers/http-helpers';

export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator;
  private readonly addAccount: AddAccount;

  constructor(emailValidator: EmailValidator,, addAccount: AddAccount ) {
    this.emailValidator = emailValidator;
    this.addAccount = addAccount;
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

      const { name, email, password, passwordConfirmation } = httpRequest.body;

      if (password !== passwordConfirmation) {
        return badRequest(new InvalidParamError('passwordConfirmation'));
      }

      const isValid = this.emailValidator.isValid(email);

      if (!isValid) {
        return badRequest(new InvalidParamError('email'));
      }

      this.addAccount.add({
        name,
        email,
        password
      })
    } catch (err) {
      return serverError();
    }
  }
}
