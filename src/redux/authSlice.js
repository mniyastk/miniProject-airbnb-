import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    initialState :{
        authToken:null,
        host_id:null
    },
    reducers:{
        setAuthToken:(state,action)=>{
            state.authToken=action.payload.token
            state.host_id=action.payload.user_id
        },
        clearAuthToken:(state)=>{
            state.authToken=null
            state.host_id=null
        }
    }
})
export const {setAuthToken,clearAuthToken}=authSlice.actions
export default authSlice.reducer