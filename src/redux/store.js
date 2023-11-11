import { configureStore } from "@reduxjs/toolkit";
import staySlice from '../redux/slices'
export const store = configureStore({
    reducer:{
    data:staySlice

    }
})