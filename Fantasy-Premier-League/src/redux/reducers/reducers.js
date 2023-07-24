import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fplInfo: [],
};
const fplData = createSlice({
  name: "FPL",
  initialState,
  reducers: {
    getFPl: (state, { payload }) => {
      state.fplInfo = payload;
    },
  },
  extraReducers: {},
});

export const { FPL } = fplData.actions;
export default fplData.reducer;
