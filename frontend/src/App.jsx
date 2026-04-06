import React, { useEffect } from 'react'
import axios from "./api/axiosconfig"
import {asyncGetuser} from "./store/userActions";
import { useDispatch, useSelector } from 'react-redux';
import Mainroutes from './routes/Mainroutes';
import Nav from './components/Nav';

function App() {
   const  data = useSelector((state)=>state);
   const  dispatch = useDispatch();
   console.log(data);
   useEffect(()=>{
    dispatch(asyncGetuser())
   },[]);
  return (
    <div className=' text-white font-thin w-screen h-screen bg-gray-800'>
      <Nav/>
       <Mainroutes/> </div>
  )
}

export default App