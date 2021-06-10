import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-test-renderer";

export const cauhoiSlice = createSlice({
  name: "cauhoi",
  initialState: {
    value: Array(30).fill({ answer: "E", result: false }),
  },
  reducers: {
    ghiNhanCautraloi: (state, action) => {
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
    },
  },
});

export const { ghiNhanCautraloi, taolaiCautraloi } = cauhoiSlice.actions;
export const currentCauhoi = (state) => state.cauhoi.value;
export default cauhoiSlice.reducer;
