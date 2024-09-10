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
      include: {
        Postimages: true,
        PostLikes: true,
        PostComments: true,
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
          Postimages: true,
          PostLikes: true,
          PostComments: true,
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
