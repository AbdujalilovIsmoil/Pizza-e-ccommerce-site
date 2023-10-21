import { createSlice } from "@reduxjs/toolkit";

type TProduct = {
  modalId: string;
  isProductModal: boolean;
};

const initialState: TProduct = {
  modalId: "",
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
    setProductId: (state, action) => {
      state.modalId = action.payload;
    },
  },
});

export default productSlice.reducer;
export const { toggleProductModal, setProductId } = productSlice.actions;
