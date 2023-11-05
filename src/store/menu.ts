import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  isMenuOpen: boolean;
};

const initialState: TInitialState = {
  isMenuOpen: false,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    isOpenModalMenu: (state) => {
      if (state.isMenuOpen) {
        state.isMenuOpen = false;
      } else {
        state.isMenuOpen = true;
      }
    },
  },
});

export default menuSlice.reducer;
export const { isOpenModalMenu } = menuSlice.actions;
