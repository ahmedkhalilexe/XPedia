const { getUsers, getUser, getUserByName } = require("../models/users");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
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
    const userId = req.query.userId;
    const { id } = req.user;
    const user = await prisma.users
      .findUnique({
        where: {
          id: userId,
        },
        select: {
          id: true,
          name: true,
          profilePicture: true,
          friendshipsSent: {
            where: {
              userBId: id,
            },
          },
          friendshipsReceived: {
            where: {
              userAId: id,
            },
          },
        },
      })
      .then((user) => user);
    if (!user) {
      throw new AppError("User not found", 404);
    }
    const isFriend =
      user.friendshipsSent.length > 0 || user.friendshipsReceived.length > 0;
    console.log(isFriend);
    return res.status(200).json({
      status: 200,
      message: "Successfully retrieved user",
      data: {
        id: user.id,
        name: user.name,
        profilePicture: user.profilePicture,
        isFriend,
      },
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

  //POST /users/friendRequest
  friendRequest: async (req, res) => {
    const userId = req.body.userId;
    const { id } = req.user;
    const friendRequest = await prisma.friendRequests.create({
      data: {
        senderId: id,
        receiverId: userId,
      },
    });
    res.status(200).json({
      status: 200,
      message: "Friend request sent",
      data: friendRequest,
    });
  },

  //PUT /users/friendRequest?userId = 1
  updateFriendRequest: async (req, res) => {
    const { userId, status } = req.body;
    const { id } = req.user;
    const friendRequest = await prisma.friendRequests.update({
      where: {
        senderId_receiverId: {
          senderId: userId,
          receiverId: id,
        },
      },
      data: {
        status,
      },
    });
    if (status === "ACCEPTED") {
      const friendship = await prisma.friendship.create({
        data: {
          userAId: id,
          userBId: userId,
        },
      });
    }
    res.status(200).json({
      status: 200,
      message: "Friend request updated",
      data: friendRequest,
    });
  },

  //GET /users/friendRequest
  getFriendRequests: async (req, res) => {
    const { id } = req.user;
    const friendRequests = await prisma.friendRequests.findMany({
      where: {
        AND: [
          { receiverId: id },
          {
            status: "PENDING",
          },
        ],
      },
      include: {
        sender: {
          select: {
            id: true,
            name: true,
            profilePicture: true,
          },
        },
      },
    });
    res.status(200).json({
      status: 200,
      message: "Friend requests retrieved",
      data: friendRequests,
    });
  },

  // GET /users/friends/me
  getFriends: async (req, res) => {
    const { id } = req.user;
    const friends = await prisma.friendship.findMany({
      where: {
        OR: [
          {
            userAId: id,
          },
          {
            userBId: id,
          },
        ],
      },
      include: {
        userB: {
          select: {
            id: true,
            name: true,
            profilePicture: true,
          },
        },
      },
    });
    res.status(200).json({
      status: 200,
      message: "Friends retrieved",
      data: friends,
    });
  },
};

module.exports = usersController;
