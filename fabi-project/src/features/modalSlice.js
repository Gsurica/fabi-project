import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false 
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    open: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export default modalSlice.reducer;
export const { open } = modalSlice.actions;