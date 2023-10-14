import { CustomerError } from "./custome-error";

export class DatabaseConnectionError extends CustomerError {
  statusCode = 500;
  reason = "Error connecting to database";

  constructor() {
    super('error connecting to db');

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
