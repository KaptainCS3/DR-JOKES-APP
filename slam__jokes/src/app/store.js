import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/themeSlice";
import commentReducer from "../features/commentSlice";
export const store = configureStore({
  reducer: {
    // reaction: reactionReducer,
    // createJoke: createJokeReducer,
    toggleTheme: themeReducer,
    jokeComment: commentReducer,
  },
});
