import { createSlice } from "@reduxjs/toolkit";

export const banglaiSlice = createSlice({
  name: "license",
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
export const currentLicense = (state) => state.license.value;
export default banglaiSlice.reducer;
