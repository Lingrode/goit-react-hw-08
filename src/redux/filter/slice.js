import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

const filterSLice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setFilter } = filterSLice.actions;

export default filterSLice.reducer;
