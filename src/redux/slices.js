import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE={
    usersData:[],
    productsData:[]
}
const staysSlice=createSlice({
    name :"stays",
    initialState:INITIAL_STATE,
    reducers:{
        userRegister:(state,action)=>{
            state.usersData.push()
        }
    }
})
export const {userRegister}=staysSlice.actions
export default staysSlice.reducer
