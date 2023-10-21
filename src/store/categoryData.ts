import { createSlice } from "@reduxjs/toolkit";

type TCategories = {
  categories: string;
};

const initialState: TCategories = {
  categories: "",
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    getCategories: (state: any, action): any => {
      state.categories = action.payload;
    },
  },
});

export default categorySlice.reducer;
export const { getCategories } = categorySlice.actions;
