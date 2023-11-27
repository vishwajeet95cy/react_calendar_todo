import CustomError from "./CustomError.js";

const customErrorHandler = (err, req, res, next) => {
  let customError = err;

  if (err.name === "SyntaxError") {
    customError = new CustomError("Unexpected Syntax", 400);
  }
  if (err.name === "ValidationError") {
    customError = new CustomError(err.message, 400);
  }

  res.status(customError.status || 500).json({
    success: false,
    statusCode: res.statusCode,
    message: customError.message,
    stack: process.env.NODE_ENV === "development" ? err.stack : null,
  });
};

export default customErrorHandler;
