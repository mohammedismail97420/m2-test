import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  overlay: null,
};

export const overlaysSlice = createSlice({
  name: "overlays",
  initialState,
  reducers: {
    overlay: (state, { payload }) => {
      state.overlay = payload;
    },
  },
});

export const { overlay } = overlaysSlice.actions;

export default overlaysSlice.reducer;
