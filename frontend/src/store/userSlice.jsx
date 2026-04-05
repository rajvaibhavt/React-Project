
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    data:[],
}
 const userSlice = createSlice({
    name:"user",

    initialState,

    reducers: { 
        loaduser: (state, action) => {
            // store user data from payload
            state.data = action.payload;
            console.log(action)
        },
    },
    
});
export const {loaduser} = userSlice.actions;
 export default userSlice.reducer;