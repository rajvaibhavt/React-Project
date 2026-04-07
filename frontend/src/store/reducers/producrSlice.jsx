import { createSlice } from "@reduxjs/toolkit";
 const  initialState = {
        carts: []
    };
const productSlice = createSlice({
   

    name: "product",
    initialState,
    reducers:{
        loadproduct:(state, action) => { 
            // here we cannot call  api to fetch data 
            // because we are in reducer and reducers are pure functions and 
            // they should not have any side effects like api calls
            //  or any other asynchronous operations so we will call 
            // api in actions and then dispatch the action to reducer
            //  to update the state    
            state.products = action.payload
            
        }
    }
    
});
export default productSlice.reducer;
export const { loadproduct } = productSlice.actions;