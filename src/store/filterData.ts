import { createSlice } from "@reduxjs/toolkit";

type TFilterData = {
  isFilterModalOpen: boolean;
};

const initialState: TFilterData = {
  isFilterModalOpen: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    toggleFilterOpenModal: (state) => {
      if (state.isFilterModalOpen) {
        state.isFilterModalOpen = false;
      } else {
        state.isFilterModalOpen = true;
      }
    },
  },
});

export const { toggleFilterOpenModal } = filterSlice.actions;
export default filterSlice.reducer;
