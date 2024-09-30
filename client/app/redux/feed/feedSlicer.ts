import { createSlice } from "@reduxjs/toolkit";
import { feedState } from "@/app/utils/types";

const initialState: feedState = {
  posts: [],
};

export const feedSlicer = createSlice({
  name: "feed",
  initialState,
  reducers: {
    initialPosts: (state, action) => {
      state.posts = [...action.payload, ...state.posts];
    },
    addPost: (state, action) => {
      state.posts = [action.payload, ...state.posts];
    },
    addComment: (state, action) => {
      const postIndex = state.posts.findIndex(
        (post) => post.id === action.payload.postId,
      );
      state.posts[postIndex].PostComments = [
        action.payload.comment,
        ...state.posts[postIndex].PostComments,
      ];
    },
  },
});

export const { addPost, initialPosts, addComment } = feedSlicer.actions;
