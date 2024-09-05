const { PrismaClient } = require("@prisma/client");
const AppError = require("../utils/AppError");
const prisma = new PrismaClient();

const authModel = {
  signUp: async ({ email, password, firstName, lastName, dateOfBirth }) => {
    //check if email already exists
    const user = await prisma.users.findUnique({
      where: {
        email,
      },
    });
    if (user) {
      throw new AppError("Email already exists", 400);
    }
    //create user
    return prisma.users.create({
      data: {
        email,
        password,
        firstName,
        lastName,
        dateOfBirth,
        profilePicture: "",
        friendsLists: {
          create: {},
        },
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        dateOfBirth: true,
        profilePicture: true,
        friendsLists: true,
      },
    });
  },

  findUser: ({ email, id }) => {
    return prisma.users
      .findUnique({
        where: {
          id,
          email,
        },
      })
      .then((user) => user);
  },
};

module.exports = authModel;
