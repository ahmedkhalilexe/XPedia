import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authState } from "@/app/utils/types";
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
    loading: false,
  },
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<authState>) => {
      state.auth.isAuth = true;
      state.auth.loading = false;
      state.user.id = action.payload.user.id;
      state.user.name = action.payload.user.name;
      state.user.email = action.payload.user.email;
      state.user.profilePicture = action.payload.user.profilePicture;
      state.user.friendsLists = action.payload.user.friendsLists;
      state.user.accessToken = action.payload.user.accessToken;
    },
  },
});
export const { signIn } = userSlice.actions;
export default userSlice;
