import { configureStore } from "@reduxjs/toolkit";
import sample from "./store/sample";

export const store = configureStore({
  reducer: { sample },
});
