import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authState, refreshTokenResponse } from "@/app/utils/types";
import axios from "axios";
import { publicAxios } from "@/app/utils/axios";
const initialState: authState = {
  user: {
    id: "",
    name: "",
    email: "",
    profilePicture: "",
    friendsLists: {
      id: "",
      ownerId: "",
    },
    accessToken: "",
  },
  auth: {
    isAuth: false,
    status: "idle",
  },
};
export const getRefreshToken = createAsyncThunk(
  "user/getRefreshToken",
  async () => {
    // axios.defaults.withCredentials = true;
    const res = await publicAxios.get("/auth/getRefreshToken");
    return res.data as refreshTokenResponse;
  },
);
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<authState>) => {
      state.auth.isAuth = true;
      state.auth.status = "success";
      state.user.id = action.payload.user.id;
      state.user.name = action.payload.user.name;
      state.user.email = action.payload.user.email;
      state.user.profilePicture = action.payload.user.profilePicture;
      state.user.friendsLists = action.payload.user.friendsLists;
      state.user.accessToken = action.payload.user.accessToken;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRefreshToken.pending, (state) => {
      state.auth.status = "loading";
    });
    builder.addCase(getRefreshToken.rejected, (state) => {
      state.auth.status = "failed";
    });
    builder.addCase(getRefreshToken.fulfilled, (state, action) => {
      const { data } = action.payload;
      state.auth.isAuth = true;
      state.auth.status = "success";
      state.user.id = data.id;
      state.user.name = data.name;
      state.user.email = data.email;
      state.user.profilePicture = data.profilePicture;
      state.user.friendsLists = data.friendsLists;
      state.user.accessToken = data.accessToken;
    });
  },
});
export const { signIn } = userSlice.actions;
export default userSlice;
