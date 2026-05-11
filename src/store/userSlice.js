import {createSlice} from "@reduxjs/toolkit"
const userSlice = createSlice({
    name:"userInfo",
    initialState:null,
    reducers:{
        adduser:(state,action)=>{
            return action.payload;

        },
        removeusers:()=>{
            return null;

        }
    }

})
export const {adduser , removeusers} = userSlice.actions;

export default userSlice.reducer;