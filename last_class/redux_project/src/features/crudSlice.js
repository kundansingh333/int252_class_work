import { createSlice } from "@reduxjs/toolkit";

const initialState=[]

export const crudSlice=createSlice({
  name:'crud',
  initialState,
  reducers:{
    // your reducers here
    addUser:(state,action)=>{
      state.push(action.payload);
    },
    deleteUser:(state,action)=>{
      return state.filter((user)=>user.id!==action.payload);
    }


  }
  
})
export const{addUser,deleteUser}=crudSlice.actions;
export default crudSlice.reducer;
