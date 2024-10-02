import { configureStore } from "@reduxjs/toolkit";
import userSlice from "@/redux/auth/userSlice";
import { feedSlicer } from "@/redux/feed/feedSlicer";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    feed: feedSlicer.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type store = typeof store;
