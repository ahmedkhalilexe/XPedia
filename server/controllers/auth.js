const { signUp, findUser } = require("../models/auth");
const bcrypt = require("bcrypt");
const AppError = require("../utils/AppError");
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
    res.json(newUser);
  },

  signIn: async (req, res) => {
    const { email, password } = req.body;
    const user = await findUser(email);
    if (!user) {
      throw new AppError("User not found", 404);
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new AppError("Invalid credentials", 401);
    }
    return res.status(200).json({
      status: "200",
      data: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        dateOfBirth: user.dateOfBirth,
        profilePicture: user.profilePicture,
      },
    });
  },

  getRefreshToken: async (req, res) => {},
};

module.exports = authController;
