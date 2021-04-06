import { configureStore } from "@reduxjs/toolkit";
import banglaiReducer from "./banglaiSlice";

export default configureStore({
  reducer: {
    banglai: banglaiReducer,
  },
});
