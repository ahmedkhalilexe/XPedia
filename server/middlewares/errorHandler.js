const AppError = require("../utils/AppError");
const { JsonWebTokenError } = require("jsonwebtoken");
const {
  PrismaClientKnownRequestError,
} = require("@prisma/client/runtime/library");
const errorHandler = (error, req, res, next) => {
  console.error("Error caught in error handler");
  console.error(error);
  if (error instanceof AppError) {
    //handle AppError
    return res.status(error.statusCode).json({
      status: error.statusCode,
      message: error.message,
    });
  }
  if (error instanceof PrismaClientKnownRequestError) {
    //handle Prisma errors
    console.error("Error caught in Prisma error handler");
    console.error(error);
    return res.status(401).json({
      status: 401,
      message: error.meta.cause,
    });
  }
  if (error instanceof JsonWebTokenError) {
    //handle JWT errors
    console.error("Error caught in JWT error handler");
    res.clearCookie("rt");
    return res.status(401).json({
      status: 401,
      message: "Invalid token",
    });
  }
  return res.status(500).json({
    status: 500,
    message: "Something went wrong!",
  });
};

module.exports = errorHandler;
