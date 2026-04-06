import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Product from '../pages/Product'
import Login from '../pages/Login'
const Mainroutes = () => {
  return (
   <Routes>
<Route path='/' element ={<Home/>}/> 
<Route path='/product' element ={<Product/>}/>
<Route path='/login' element ={<Login/>}/>

   </Routes>
  )
}

export default Mainroutes