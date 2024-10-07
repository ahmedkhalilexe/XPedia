const { signUp } = require("../models/auth");
const { getUser } = require("../models/users");
const bcrypt = require("bcrypt");
const AppError = require("../utils/AppError");
const jwt = require("jsonwebtoken");
const authController = {
  signUp: async (req, res) => {
    const { email, password, name, dateOfBirth } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await signUp({
      email,
      password: hashedPassword,
      name,
      dateOfBirth: new Date(dateOfBirth),
    });
    return res.json({ status: "200", message: "User signed Up" });
  },

  signIn: async (req, res) => {
    const { email, password } = req.body;
    const user = await getUser({
      email,
      select: {
        password,
        name: true,
        dateOfBirth: true,
        profilePicture: true,
      },
    });
    if (!user) {
      throw new AppError("Invalid credentials", 401);
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
      message: "User signed in",
      data: {
        id: user.id,
        email: user.email,
        name: user.name,
        dateOfBirth: user.dateOfBirth,
        profilePicture: user.profilePicture,
        friendsLists: user.friendsLists,
        accessToken,
      },
    });
  },

  signOut: async (req, res) => {
    res.clearCookie("rt");
    return res.status(200).json({
      status: "200",
      message: "User signed out",
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
    const user = await getUser({
      id: decodedRefreshToken.id,
      select: {
        name: true,
        dateOfBirth: true,
        profilePicture: true,
      },
    });
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
      message: "Token refreshed",
      data: {
        id: user.id,
        email: user.email,
        name: user.name,
        dateOfBirth: user.dateOfBirth,
        profilePicture: user.profilePicture,
        accessToken,
      },
    });
  },
};

module.exports = authController;
