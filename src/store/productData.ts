import { createSlice } from "@reduxjs/toolkit";

type TProduct = {
  modalId: string;
  isProductModal: boolean;
  smallProductModal: boolean;
};

const initialState: TProduct = {
  modalId: "",
  isProductModal: false,
  smallProductModal: false,
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
    smallProductModal: (state, action) => {
      state.smallProductModal = action.payload;
    },
  },
});

export default productSlice.reducer;
export const { toggleProductModal, setProductId, smallProductModal } =
  productSlice.actions;
