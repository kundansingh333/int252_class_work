import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/couterSlice.js";
import crudReducer from "./features/curd/crudSlice.js";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    crud:crudReducer,
  },
});
