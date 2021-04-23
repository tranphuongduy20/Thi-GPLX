import { createSlice } from "@reduxjs/toolkit";

export const cauhoiSlice = createSlice({
  name: "cauhoi",
  initialState: {
    value: 1,
  },
  reducers: {
    chuyenCauhoi: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { chuyenCauhoi } = cauhoiSlice.actions;
export const currentCauhoi = (state) => state.cauhoi.value;
export default cauhoiSlice.reducer;
