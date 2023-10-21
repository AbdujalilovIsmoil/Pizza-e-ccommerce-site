import categories from "./categoryData";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    categories,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
