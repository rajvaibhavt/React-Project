import { nanoid } from '@reduxjs/toolkit'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'


const Login = () => {
    const { register, reset, handleSubmit } = useForm()
    const onSubmit = (data) => {
      
        
      console.log('login data', data)
      reset()
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-4 w-1/3 mx-auto mt-10  p-4 border border-gray-300 rounded  bg-gray-700 '>
      <input {...register("username")} type="text" placeholder="raj" />
      <input {...register("email")} type="email" placeholder="Email" />
      <input {...register("password")} type="password" placeholder="Password" />
      <button  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit">Login</button>
      <Link to="/register"

       className='text-sm text-blue-400'>
        Don't have an account? Register</Link>
    </form>
  )
}

export default Login