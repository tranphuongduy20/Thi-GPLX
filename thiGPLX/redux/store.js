import { configureStore } from "@reduxjs/toolkit";
import banglaiReducer from "./banglaiSlice";
import ontapReducer from "./ontapSlice";

export default configureStore({
  reducer: {
    license: banglaiReducer,
    part: ontapReducer,
  },
});
