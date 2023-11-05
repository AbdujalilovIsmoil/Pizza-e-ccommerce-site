import menuData from "./menu";
import filterData from "./filterData";
import productData from "./productData";
import categories from "./categoryData";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    menuData,
    categories,
    filterData,
    productData,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
