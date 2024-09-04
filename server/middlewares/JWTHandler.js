const AppError = require("../utils/AppError");
const jwt = require("jsonwebtoken");
const JWTHandler = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (err) {
    throw new AppError("Unauthorized", 403);
  }
};

module.exports = JWTHandler;
