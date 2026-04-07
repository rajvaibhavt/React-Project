import { configureStore } from '@reduxjs/toolkit'
import { useReducer } from 'react'
//import userReducer from './userSlice'
import userSlice from './reducers/userSlice'
import productSlice from './reducers/producrSlice'
import cartSlice from './reducers/cartSlice'



export const store = configureStore({
  reducer: {
    userReducer:userSlice,
    productReducer:productSlice,
    cartReducer:cartSlice,
  },
})