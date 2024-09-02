const AppError = require("../utils/AppError");

const errorHandler = (error, req, res, next) => {
    console.error("Error caught in error handler");
    console.error(error.message);
    if(error instanceof AppError){
        return res.status(error.statusCode).json({
            status: error.statusCode,
            message: error.message
        });
    }
    return res.status(500).json({
        status: 500,
        message: "Something went wrong!"
    });
};

module.exports = errorHandler;