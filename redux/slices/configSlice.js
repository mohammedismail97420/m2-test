import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  config: null,
};

export const configSlice = createSlice({
  name: "configs",
  initialState,
  reducers: {
    config: (state, { payload }) => {
      state.config = payload;
    },
  },
});

export const { config } = configSlice.actions;

export default configSlice.reducer;
