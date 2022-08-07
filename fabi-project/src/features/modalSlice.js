import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  chooseImage: "" 
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    open: (state, action) => {
      state.isOpen = action.payload;
    },
    chooseImage: (state, action) => {
      state.chooseImage = action.payload;
    },
  },
});

export default modalSlice.reducer;
export const { open, chooseImage } = modalSlice.actions;