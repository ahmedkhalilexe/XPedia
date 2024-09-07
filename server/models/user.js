const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const userModel = {
  getUser: ({
    email,
    id,
    select: { firstName, lastName, dateOfBirth, profilePicture, password },
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
          firstName: !!firstName,
          lastName: !!lastName,
          dateOfBirth: !!dateOfBirth,
          profilePicture: !!profilePicture,
          password: !!password,
        },
      })
      .then((user) => user);
  },
  getUsers: () => {
    return prisma.users.findMany({
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        dateOfBirth: true,
        profilePicture: true,
      },
    });
  },
};

module.exports = userModel;
