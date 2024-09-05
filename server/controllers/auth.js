const { signUp, findUser } = require("../models/auth");
const bcrypt = require("bcrypt");
const AppError = require("../utils/AppError");
const jwt = require("jsonwebtoken");
const authController = {
  signUp: async (req, res) => {
    const { email, password, firstName, lastName, dateOfBirth } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await signUp({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      dateOfBirth: new Date(dateOfBirth),
    });
    return res.json(newUser);
  },

  signIn: async (req, res) => {
    const { email, password } = req.body;
    const user = await findUser({ email });
    if (!user) {
      throw new AppError("User not found", 404);
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new AppError("Invalid credentials", 401);
    }
    const accessToken = jwt.sign(
      { id: user.id, email: user.email },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "15m",
      },
    );
    const refreshToken = jwt.sign(
      { id: user.id },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "1d",
      },
    );
    res.cookie("rt", refreshToken, {
      httpOnly: true,
      secure: true,
      maxAge: 1000 * 60 * 60 * 24,
    });
    return res.status(200).json({
      status: "200",
      data: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        dateOfBirth: user.dateOfBirth,
        profilePicture: user.profilePicture,
        accessToken,
      },
    });
  },

  getRefreshToken: async (req, res) => {
    const refreshToken = req.cookies.rt;
    if (!refreshToken) {
      throw new AppError("Unauthorized", 401);
    }
    const decodedRefreshToken = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
    );
    console.log(decodedRefreshToken.id);
    const user = await findUser({ id: decodedRefreshToken.id });
    if (!user) {
      res.clearCookie("rt");
      throw new AppError("Unauthorized", 401);
    }
    const accessToken = jwt.sign(
      { id: user.id, email: user.email },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "15m",
      },
    );

    return res.status(200).json({
      status: "200",
      data: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        dateOfBirth: user.dateOfBirth,
        profilePicture: user.profilePicture,
        accessToken,
      },
    });
  },
};

module.exports = authController;
