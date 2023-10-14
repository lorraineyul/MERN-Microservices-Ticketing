import { ValidationError } from "express-validator";
import { CustomerError } from "./custome-error";


export class RequestValidationError extends CustomerError {
  statusCode = 400;

  constructor(public errors: ValidationError[]) {
    super('invalid request paramaters');

    // only because we are extending a built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map((err) => {
      return { message: err.msg };
    });
  }
}
