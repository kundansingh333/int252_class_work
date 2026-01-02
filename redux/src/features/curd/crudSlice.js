import { createSlice } from "@reduxjs/toolkit";

export const crudSlice = createSlice({
  name: "crud",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateItem: (state, action) => {
      const { id, data } = action.payload;
      const index = state.items.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.items[index] = { ...state.items[index], ...data };
      }
    },
    clearItems: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, updateItem, clearItems } =
  crudSlice.actions;

export default crudSlice.reducer;
