import { createSlice } from "@reduxjs/toolkit";

// State can be "mutated" because of Immer (part of Redux Toolkit) https://github.com/immerjs/immer
export const slice = createSlice({
  name: "riskSelector",
  initialState: {
    value: 1,
  },
  reducers: {
    setRisk: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const actions = slice.actions;

export default slice.reducer;
