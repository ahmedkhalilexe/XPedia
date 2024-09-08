const { PrismaClient } = require("@prisma/client");
const AppError = require("../utils/AppError");
const prisma = new PrismaClient();
const { getUser } = require("./users");

const authModel = {
  signUp: async ({ email, password, name, dateOfBirth }) => {
    //check if email already exists
    const user = await getUser({ email, select: {} });
    if (user) {
      throw new AppError("Email already exists", 400);
    }
    //create user
    return prisma.users.create({
      data: {
        email,
        password,
        name,
        dateOfBirth,
        profilePicture: "",
        friendsLists: {
          create: {},
        },
      },
      select: {
        id: true,
        email: true,
        name: true,
        dateOfBirth: true,
        profilePicture: true,
        friendsLists: true,
      },
    });
  },
};

module.exports = authModel;
