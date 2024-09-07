const AppError = require("../utils/AppError");
const { JsonWebTokenError } = require("jsonwebtoken");

const errorHandler = (error, req, res, next) => {
  console.error("Error caught in error handler");
  console.error(error.message);
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: error.statusCode,
      message: error.message,
    });
  }
  if (error instanceof JsonWebTokenError) {
    console.log("Error caught in JWT error handler");
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
