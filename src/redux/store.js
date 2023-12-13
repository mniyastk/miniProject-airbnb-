import { configureStore } from "@reduxjs/toolkit";
import staySlice from '../redux/slices'
import authSlice from "./authSlice";
export const store = configureStore({
    reducer:{
    data:staySlice,
    auth:authSlice

    }
})