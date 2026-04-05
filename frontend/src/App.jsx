import React, { useEffect } from 'react'
import axios from "./api/axiosconfig"
import {asyncGetuser} from "./store/userActions";
import { useDispatch, useSelector } from 'react-redux';

function App() {
   const  data = useSelector((state)=>state);
   const  dispatch = useDispatch();
   console.log(data);
   useEffect(()=>{
    dispatch(asyncGetuser())
   },[]);
  return (
    <div> App </div>
  )
}

export default App