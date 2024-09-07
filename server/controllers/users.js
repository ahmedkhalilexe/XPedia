const { getUsers, getUser } = require("../models/user");
const AppError = require("../utils/AppError");

const usersController = {
  // GET /users
  getUsers: async (req, res) => {
    const users = await getUsers();
    res.status(200).json({
      status: 200,
      message: "Successfully retrieved users",
      data: users,
    });
  },

  // GET /users/:userID
  getUser: async (req, res) => {
    const id = req.params.userID;
    const user = await getUser({
      id,
      select: {
        firstName: true,
        lastName: true,
        dateOfBirth: true,
        profilePicture: true,
      },
    });
    if (!user) {
      throw new AppError("User not found", 404);
    }
    return res.status(200).json({
      status: 200,
      message: "Successfully retrieved user",
      data: user,
    });
  },
};

module.exports = usersController;
