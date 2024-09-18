import { configureStore } from "@reduxjs/toolkit";
import userSlice from "@/app/redux/auth/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type store = typeof store;
