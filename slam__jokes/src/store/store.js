import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    reaction: reactionReducer,
    createJoke: createJokeReducer,
  },
});
