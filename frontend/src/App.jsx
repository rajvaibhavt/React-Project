import React, { useEffect } from 'react'
import axios from "./api/axiosconfig"
function App() {
  const getproduct = async() => {
try{
 const res =  await axios.get('/product');
 console.log(res.data);
} catch(error){
 console.log(error); 
}  
  };
   useEffect(()=>{
    getproduct()
   },[]);
  return (
    <div> App </div>
  )
}

export default App