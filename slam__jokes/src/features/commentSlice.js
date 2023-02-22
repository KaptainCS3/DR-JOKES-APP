import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    comment: "This is so hillarious 🤣🤣🤣",
  },
  {
    id: 2,
    comment: "z-index of 9999 and the div doesn't show up 😂😂😂",
  },
  {
    id: 3,
    comment: "Try to make this joke funny bro 😑😑😑",
  },
];

const jokeComment = createSlice({
  name: "jokeComment",
  initialState,
  reducers: {
    postComment(state, action) {
      state.unshift(action.payload);
    },
  },
});

export const { postComment } = jokeComment.actions;
export default jokeComment.reducer;

// w-1/2 mr-[12.5%]