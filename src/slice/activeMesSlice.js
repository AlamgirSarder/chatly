import { createSlice } from "@reduxjs/toolkit";
 
export const activeMesSlice = createSlice({
    name: "active",
    initialState:{
        value: localStorage.getItem("activeMessInfo") ? JSON.parse(localStorage.getItem("activeMessInfo")) : null
    },
    reducers:{
        activeMessInfo: (state,action)=>{
              state.value = action.payload
  
        }
    }
})

export const {activeMessInfo} = activeMesSlice.actions;
export default activeMesSlice.reducer;