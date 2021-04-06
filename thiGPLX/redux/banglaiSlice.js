import { createSlice } from "@reduxjs/toolkit";

export const banglaiSlice = createSlice({
  name: "banglai",
  initialState: {
    value: "A1",
  },
  reducers: {
    thaydoiBanglai: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { thaydoiBanglai } = banglaiSlice.actions;
export const currentBanglai = (state) => state.banglai.value;
export default banglaiSlice.reducer;
