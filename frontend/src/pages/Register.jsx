import { nanoid } from '@reduxjs/toolkit'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Link as link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import login from './Login'


const Register = () => {
    const { register, reset, handleSubmit } = useForm()
    const Registerhandler = (data) => {
        
        
        
      console.log('register data', data)
      
    }
  return (
    <form onSubmit={handleSubmit(Registerhandler)} className='flex flex-col gap-y-4 w-1/3 mx-auto mt-10  p-4 border border-gray-300 rounded  bg-gray-700 '>
      <input {...register("username")} type="text" placeholder="raj" />
      <input {...register("email")} type="email" placeholder="Email" />
      <input {...register("password")} type="password" placeholder="Password" />
      <button> Register</button>
      <p> Already have an account ?
        <link className=' text-blue-400' to = "/login">Login</link>
      </p>
    </form>
  )
}

export default Register