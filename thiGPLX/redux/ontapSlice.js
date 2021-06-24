import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-test-renderer";

export const ontapSlice = createSlice({
  name: "part",
  initialState: {
    value: "toanBo",
  },
  reducers: {
    /*ghiNhanCautraloi: (state, action) => {
      if (action.payload.answer != state.value[action.payload.order]) {
        state.value[action.payload.order] = {
          answer: action.payload.answer,
          result: action.payload.answer == action.payload.result ? true : false,
        };
      }
    },
    taolaiCautraloi: (state, action) => {
      const copyCautraloi = Array(30).fill({ answer: "E", result: false }); //copy the array
      state.value = copyCautraloi;
    },*/
    chonPhanOnTap: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { chonPhanOnTap } = ontapSlice.actions;
export const currentPart = (state) => state.part.value;
export default ontapSlice.reducer;
