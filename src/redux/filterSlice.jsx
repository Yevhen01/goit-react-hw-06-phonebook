import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,

  reducers: {
    setFilter: {
      reducer(state, action) {
        state.filter = action.payload.toLowerCase();
      },
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const getFilter = (state) => state.filter.filter;
export const filterReducer = filterSlice.reducer;
