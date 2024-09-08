const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const AppError = require("../utils/AppError");

const userModel = {
  getUser: ({
    email,
    id,
    select: { name, dateOfBirth, profilePicture, password, friendsLists },
  }) => {
    return prisma.users
      .findUnique({
        where: {
          id,
          email,
        },
        select: {
          id: true,
          email: true,
          name: !!name,
          dateOfBirth: !!dateOfBirth,
          profilePicture: !!profilePicture,
          password: !!password,
          friendsLists: !!friendsLists,
        },
      })
      .then((user) => user);
  },

  getUsers: () => {
    return prisma.users.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        dateOfBirth: true,
        profilePicture: true,
      },
    });
  },

  getUserByName: async ({ name }) => {
    return prisma.users.findMany({
      where: {
        name: {
          contains: name,
        },
      },
    });
  },

  getFriends: async ({ userId }) => {
    return prisma.users.findUnique({
      where: {
        id: userId,
      },
      select: {
        friendsLists: {
          select: {
            Friends: true,
          },
        },
      },
    });
  },

  addFriend: async ({ userId, friendListId }) => {
    const isFriend = await prisma.friendsLists.findUnique({
      where: {
        id: friendListId,
        Friends: {
          every: {
            userId,
          },
        },
      },
      select: {
        Friends: true,
      },
    });
    if (isFriend.Friends.length > 0) {
      throw new AppError("user already a friend", 400);
    }
    return prisma.friends.create({
      data: {
        userId,
        friendListId,
      },
      include: {
        user: {
          select: {
            name: true,
            profilePicture: true,
          },
        },
      },
    });
  },
};

module.exports = userModel;
