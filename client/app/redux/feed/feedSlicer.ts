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
    changeLike: (state, action) => {
      const postIndex = state.posts.findIndex(
        (post) => post.id === action.payload.postId,
      );
      state.posts[postIndex].isLiked = !state.posts[postIndex].isLiked;
      if (state.posts[postIndex].isLiked) {
        state.posts[postIndex].PostLikes.push(action.payload.like);
      } else {
        state.posts[postIndex].PostLikes = state.posts[
          postIndex
        ].PostLikes.filter((like) => like.userId !== action.payload.userId);
      }
    },
  },
});

export const { addPost, initialPosts, addComment, changeLike } =
  feedSlicer.actions;
