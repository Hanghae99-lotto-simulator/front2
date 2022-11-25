import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sample: "sample",
};

export const sampleSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    sample: (state, action) => {},
  },
});

export const { sample } = sampleSlice.actions;

export default sampleSlice.reducer;
