import { createSlice } from "@reduxjs/toolkit";

type TProduct = {
  isProductModal: boolean;
};

const initialState: TProduct = {
  isProductModal: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    toggleProductModal: (state) => {
      if (state.isProductModal) {
        state.isProductModal = false;
      } else {
        state.isProductModal = true;
      }
    },
  },
});

export default productSlice.reducer;
export const { toggleProductModal } = productSlice.actions;
