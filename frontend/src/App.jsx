import React, { useEffect } from 'react'
import axios from "./api/axiosconfig"
import {asyncGetuser} from "./store/userActions";
import { useDispatch } from 'react-redux';

function App() {
   const  dispatch = useDispatch()
   useEffect(()=>{
    dispatch(asyncGetuser())
   },[]);
  return (
    <div> App </div>
  )
}

export default App