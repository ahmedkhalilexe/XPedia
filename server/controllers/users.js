const {
  getUsers,
  getUser,
  getUserByName,
  getFriends,
  addFriend,
} = require("../models/users");
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

  // GET /users/id?id=1
  getUser: async (req, res) => {
    const id = req.query.id;
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

  // GET /users/search?name=John
  searchUsers: async (req, res) => {
    const name = req.query.name;
    const users = await getUserByName({ name });
    res.status(200).json({
      status: 200,
      message: "Successfully retrieved users",
      data: users,
    });
  },

  // GET /users/friends?id=1
  getFriends: async (req, res) => {
    const userId = req.query.userId;
    const friends = await getFriends({ userId });
    return res.status(200).json({
      status: 200,
      message: "Successfully retrieved user's friends",
      data: friends,
    });
  },

  // POST /users/friends?id=1

  addFriend: async (req, res) => {
    const userId = req.query.userId;
    const friendListId = req.user.friendsListId;
    const friends = await addFriend({ userId, friendListId });
    return res.status(200).json({
      status: 200,
      message: "user added successfully",
      data: friends,
    });
  },
};

module.exports = usersController;
