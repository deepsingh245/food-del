import React, { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { Link } from 'react-router-dom'

function SignUp() {
  const [credentials, setCredentials] = useState({name:'',email:'',password:'',location:''})
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const response = fetch('http://localhost:3000/api/createuser',{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name:credentials.name,
          email:credentials.email,
          password: credentials.password,
          location: credentials.location
        })
    }).then(variable => {
      console.log(variable.json())
      if(!variable.ok){
        alert('Bad credentials')
      }
      else{
        window.location='/'
      }
  })}
  const onChange=(e)=>{
      setCredentials({...credentials,[e.target.name]:e.target.value})
    }
  
  return (
    <>
    <Navbar/>
      <div className="flex min-h-full h-screen flex-1 bg-gray-900 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-200">
            Sign Up for your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6"  onSubmit={handleSubmit}>
          <div className='flex justify-between'>
              <div className='flex flex-col'>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-200">
                First Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={credentials.name}
                  onChange={onChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              </div>
              <div className='flex-col'>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-200">
                Last Name
              </label>
              <div className="mt-2">
                <input
                  id="lastname"
                  name="lastname"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-200">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={credentials.email}
                  onChange={onChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-200">
                  Password
                </label>
                
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={onChange}
                  value={credentials.password}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-200">
                Location
              </label>
              <div className="mt-2">
                <input
                  id="location"
                  name="location"
                  type="text"
                  autoComplete="location"
                  value={credentials.location}
                  onChange={onChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create Account
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-400">
            Already a member?{' '}
            <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Login Here
            </Link>
          </p>
        </div>
      </div>
      <Footer/>
    </>
  
  )
}

export default SignUp
