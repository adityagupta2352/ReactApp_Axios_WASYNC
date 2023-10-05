import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "../Slices/mainSlice";
import comSlice from "../Slices/comSlice";

export const store = configureStore({
  reducer: {
    main: mainSlice,
    com : comSlice,
  },
});