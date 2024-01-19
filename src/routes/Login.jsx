import React from 'react'
import Navbar from '../components/Navbar.jsx'
function Login() {
  return (
    <>
    <Navbar/>
    <div className='flex justify-center items-center'>
      <div className='login w-1/2 h-1/2 border'>
        <h1 className='text-xl text-center font-bold text-black'>Login</h1>
      </div>
    </div>
    </>
  )
}

export default Login
