const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const postsController = {
  // GET /posts
  GetPosts: async (req, res) => {
    const { id, friendsListId } = req.user;
    const posts = await prisma.posts
      .findMany({
        where: {
          OR: [
            {
              userId: id,
            },
            {
              user: {
                Friends: {
                  some: {
                    friendListId: friendsListId,
                  },
                },
              },
            },
          ],
        },
        orderBy: {
          createdAt: "desc",
        },
        include: {
          Postimages: true,
          PostLikes: true,
          PostComments: true,
          user: {
            select: {
              name: true,
              profilePicture: true,
            },
          },
        },
      })
      .then((posts) => posts);
    return res.status(200).json({
      status: 200,
      message: "Successfully retrieved user's posts",
      data: posts,
    });
  },

  // POST /posts
  CreatePost: async (req, res) => {
    const userId = req.user.id;
    const { body } = req.body;
    const post = await prisma.posts.create({
      data: {
        body,
        userId: userId,
      },
    });
    return res.status(201).json({
      status: 201,
      message: "Successfully created post",
      data: post,
    });
  },

  //GET /posts/me
  GetMyPosts: async (req, res) => {
    const userId = req.user.id;
    const posts = await prisma.posts.findMany({
      where: {
        userId,
      },
    });
    return res.status(200).json({
      status: 200,
      message: "Successfully retrieved user's posts",
      data: posts,
    });
  },
};

module.exports = postsController;
