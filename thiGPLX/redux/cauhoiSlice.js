import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-test-renderer";

export const cauhoiSlice = createSlice({
  name: "cauhoi",
  initialState: {
    value: Array(30).fill("E"),
  },
  reducers: {
    ghiNhanCautraloi: (state, action) => {
      if (action.payload.answer != state.value[action.payload.order]) {
        const copyCautraloi = state.value.slice(); //copy the array
        copyCautraloi[action.payload.order] = action.payload.answer; //execute the manipulations
        state.value[action.payload.order] = action.payload.answer;
      }
    },
    taolaiCautraloi: (state, action) => {
      const copyCautraloi = Array(30).fill("E"); //copy the array
      state.value = copyCautraloi;
    },
  },
});

export const { ghiNhanCautraloi, taolaiCautraloi } = cauhoiSlice.actions;
export const currentCauhoi = (state) => state.cauhoi.value;
export default cauhoiSlice.reducer;
