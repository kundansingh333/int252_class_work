import { configureStore } from "@reduxjs/toolkit";
import crudReducer from "../features/crudSlice.js";

export const store=configureStore({
  reducer:{
    // your reducers here
    users:crudReducer
  }
})
