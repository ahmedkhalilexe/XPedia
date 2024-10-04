export type authState = {
  user: {
    id: string;
    name: string;
    email: string;
    profilePicture: string;
    friendsLists: friendsLists;
    accessToken: string;
  };
  auth: {
    isAuth: boolean;
    status?: "idle" | "loading" | "success" | "failed";
  };
};

type user = {
  id: string;
  name: string;
  email: string;
  profilePicture: string;
  friendsLists: friendsLists;
  accessToken: string;
};

type friendsLists = {
  id: string;
  ownerId: string;
};

export type signInResponse = {
  status: string;
  message: string;
  data: user;
};

export type signInPaylaod = {
  email: string;
  password: string;
};

export type signUpPayload = {
  email: string;
  password: string;
  name: string;
  dateOfBirth: string;
};

export type refreshTokenResponse = {
  status: string;
  message: string;
  data: user;
};

export type postPayload = {
  body: string;
  attachments?: string[];
};

export type postAddResponse = {
  status: string;
  message: string;
  data: post;
};
export type post = {
  id: string;
  body: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  PostImages: string[];
  PostLikes: like[];
  PostComments: comment[];
  user: {
    name: string;
    profilePicture: string;
  };
  isLiked: boolean;
};
export type postsGetResponse = {
  status: string;
  message: string;
  data: post[];
};
export type postLikeResponse = {
  status: string;
  message: string;
  data: {
    id: string;
    postId: string;
    userId: string;
    createdAt: string;
  };
};
export type postUnlikeResponse = {
  status: string;
  message: string;
};

export type like = {
  id: string;
  postId: string;
  userId: string;
  createdAt: string;
};

export type comment = {
  id: string;
  body: string;
  userId: string;
  postId: string;
  createdAt: string;
  updatedAt: string;
  user: {
    name: string;
    profilePicture: string;
  };
};
export type commentAddResponse = {
  status: string;
  message: string;
  data: comment;
};

export type feedState = {
  posts: post[];
};
type userProfile = {
  id: string;
  name: string;
  profilePicture: string;
  isFriend: boolean;
};
export type userProfileResponse = {
  status: string;
  message: string;
  data: userProfile;
};
