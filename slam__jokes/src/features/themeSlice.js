import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: false,
};
const themeToggle = createSlice({
  name: "toggleTheme",
  initialState,
  reducers: {
    switchMode(state, action) {
      state.value = action.payload(!state.value);
    },
  },
});
export const { switchMode } = themeToggle.actions;
export default themeToggle.reducer;
