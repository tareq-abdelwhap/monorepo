import { AppError } from '../utils/AppError';

class ErrorHandler {
  private static err: any;
  private static req: any;
  private static res: any;
  private static next: any;

  private static error: any;

  // constructor() {}

  public static handle(err, req, res, next) {
    this.err.statusCode = this.err.statusCode || 500;
    this.err.status = this.err.status || 'error';

    if (process.env.NODE_ENV === 'production') {
      const { name, code } = this.err;
      if (name === 'CastError') this.error = this.errorCastHandler(); // Database Invalid IDs Error
      if (code === 11000) this.error = this.errorDuplicateHandler(); // Database Duplication Error
      if (name === 'ValidationError')
        this.error = this.errorValidationHandler(); // Database Validation Error

      this.errorProd(); // Production Errors
    }

    this.errorDev(); // Development Errors
  }

  private static errorDev() {
    this.res.status(this.err.statusCode).json({
      status: this.err.status,
      message: this.err.message,
      err: this.err,
      stack: this.err.stack,
    });
  }

  private static errorProd() {
    if (this.error.isOperational) {
      this.res.status(this.error.statusCode).json({
        status: this.error.status,
        message: this.error.message,
      });
    } else {
      console.log(this.error);
      this.res.status(500).json({
        status: 'error',
        message: 'Something went wrong',
      });
    }
  }

  // Database Error Handling
  private static errorCastHandler() {
    return new AppError(`Resource not found. Invalid: ${this.err.path}`, 400);
  }

  private static errorDuplicateHandler() {
    const value = Object.values(this.err.keyValue)[0];
    const message = `Duplicate field value: ${value}. Please use another value!`;
    return new AppError(message, 400);
  }

  private static errorValidationHandler() {
    const errors = Object.values(this.err.errors).map((el: any) => el.message);
    const message = `Invalid input data. ${errors.join('. ')}`;
    return new AppError(message, 400);
  }
}

export { ErrorHandler };
