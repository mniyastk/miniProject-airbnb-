import { configureStore } from "@reduxjs/toolkit";
import staySlice from '../redux/slices'
import authSlice from "./authSlice";
import adminAuth from "./adminAuth";
export const store = configureStore({
    reducer:{
    data:staySlice,
    auth:authSlice,
    admin:adminAuth
    }
})