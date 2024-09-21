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
