import { configureStore } from "@reduxjs/toolkit";
import banglaiReducer from "./banglaiSlice";
import cauhoiReducer from "./cauhoiSlice";

export default configureStore({
  reducer: {
    banglai: banglaiReducer,
    cauhoi: cauhoiReducer,
  },
});
