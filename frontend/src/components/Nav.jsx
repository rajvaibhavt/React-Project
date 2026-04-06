import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='flex justify-center item-center gap-x-20 p-4 bg-gray-900'>
       <NavLink  to ="/">Home</NavLink>
       <NavLink  to ="/product">Products</NavLink>
       <NavLink  to ="/login">Login</NavLink>
       <NavLink  to ="/register">Register</NavLink>
     
    </nav>
  )
}

export default Nav