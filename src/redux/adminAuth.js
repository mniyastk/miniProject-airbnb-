import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name:"admin",
    initialState:{
        adminToken:null
    },
    reducers:{
        setAdminToken:(state,action)=>{
            state.adminToken=action.payload
        },
        clearAdminToken:(state)=>{
            state.adminToken=null
         
        }
    }
})
export const {setAdminToken,clearAdminToken}=adminSlice.actions
export default adminSlice.reducer