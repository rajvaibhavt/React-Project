import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const Register = () => {
  const { register, reset, handleSubmit } = useForm()
  const Registerhandler = (data) => {
    console.log('register data', data)
  }

  return (
    <form onSubmit={handleSubmit(Registerhandler)} className='flex flex-col gap-y-4 w-1/3 mx-auto mt-10  p-4 border border-gray-300 rounded  bg-gray-700 '>
      <input {...register('username')} type='text' placeholder='raj' />
      <input {...register('email')} type='email' placeholder='Email' />
      <input {...register('password')} type='password' placeholder='Password' />
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type='submit'>Register</button>
      <p>
        Already have an account?{' '}
        <Link className='text-blue-400' to='/login'>
          Login
        </Link>
      </p>
    </form>
  )
}

export default Register