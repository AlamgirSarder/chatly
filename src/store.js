import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "./slice/userSlice";
import  activeMesSlice  from "./slice/activeMesSlice";

export default configureStore({
    reducer:{
        userInfo: userSlice,
        activeInfo: activeMesSlice
    }
})