const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const postsController = {
  // GET /posts
  GetPosts: async (req, res) => {
    const { id } = req.user;
    const posts = await prisma.posts
      .findMany({
        where: {
          OR: [
            {
              userId: id,
            },
            {
              user: {
                friendshipsSent: { some: { userBId: id } }, // Posts by friends (userA)
              },
            },
            {
              user: {
                friendshipsReceived: { some: { userAId: id } }, // Posts by friends (userB)
              },
            },
          ],
        },
        orderBy: {
          createdAt: "desc",
        },
        include: {
          PostImages: true,
          PostLikes: true,
          PostComments: {
            orderBy: {
              createdAt: "desc",
            },
            include: {
              user: {
                select: {
                  name: true,
                  profilePicture: true,
                },
              },
            },
          },
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
      include: {
        PostImages: true,
        PostLikes: true,
        PostComments: {
          orderBy: {
            createdAt: "desc",
          },
          include: {
            user: {
              select: {
                name: true,
                profilePicture: true,
              },
            },
          },
        },
        user: {
          select: {
            name: true,
            profilePicture: true,
          },
        },
      },
    });
    return res.status(201).json({
      status: 201,
      message: "Successfully created post",
      data: post,
    });
  },

  //DELETE /posts
  deletePost: async (req, res) => {
    const userId = req.user.id;
    const { postId } = req.body;
    await prisma.posts.delete({
      where: {
        id: postId,
        userId,
      },
    });
    return res.status(200).json({
      status: 200,
      message: "Successfully deleted post",
    });
  },

  //GET /posts/me
  GetMyPosts: async (req, res) => {
    const userId = req.user.id;
    const posts = await prisma.posts.findMany({
      where: {
        userId,
      },
      include: {
        PostImages: true,
        PostLikes: true,
        PostComments: {
          orderBy: {
            createdAt: "desc",
          },
          include: {
            user: {
              select: {
                name: true,
                profilePicture: true,
              },
            },
          },
        },
        user: {
          select: {
            name: true,
            profilePicture: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return res.status(200).json({
      status: 200,
      message: "Successfully retrieved user's posts",
      data: posts,
    });
  },

  //GET /posts/user/
  getUserPosts: async (req, res) => {
    const { userId } = req.query;
    const posts = await prisma.posts
      .findMany({
        where: {
          userId,
        },
        include: {
          PostImages: true,
          PostLikes: true,
          PostComments: {
            orderBy: {
              createdAt: "desc",
            },
            include: {
              user: {
                select: {
                  name: true,
                  profilePicture: true,
                },
              },
            },
          },
          user: {
            select: {
              name: true,
              profilePicture: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      })
      .then((posts) => posts);
    return res.status(200).json({
      status: 200,
      message: "Successfully retrieved user's posts",
      data: posts,
    });
  },

  //POST /posts/like
  likePost: async (req, res) => {
    const userId = req.user.id;
    const { postId } = req.body;
    const like = await prisma.postLikes.create({
      data: {
        postId,
        userId,
      },
    });
    return res.status(201).json({
      status: 201,
      message: "Successfully liked post",
      data: like,
    });
  },

  //DELETE /posts/like
  unlikePost: async (req, res) => {
    const userId = req.user.id;
    const { postId } = req.body;
    await prisma.postLikes.deleteMany({
      where: {
        postId,
        userId,
      },
    });
    return res.status(200).json({
      status: 200,
      message: "Successfully unliked post",
    });
  },

  //POST /posts/comment
  commentPost: async (req, res) => {
    const userId = req.user.id;
    const { postId, body } = req.body;
    const comment = await prisma.postComments.create({
      data: {
        postId,
        userId,
        body,
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
    return res.status(201).json({
      status: 201,
      message: "Successfully commented on post",
      data: comment,
    });
  },

  //DELETE /posts/comment
  deleteComment: async (req, res) => {
    const userId = req.user.id;
    const { commentId } = req.body;
    await prisma.postComments.delete({
      where: {
        id: commentId,
        userId,
      },
    });
    return res.status(200).json({
      status: 200,
      message: "Successfully deleted comment",
    });
  },
};

module.exports = postsController;
