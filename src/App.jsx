import { useState } from 'react'
import './App.css'
// import Navbar from './components/Navbar.jsx'
import {Routes, Route} from 'react-router-dom'
import About from './routes/About.jsx'
import Login from './routes/Login.jsx'
import Home from './routes/Home.jsx'
import SignUp from './routes/Signup.jsx'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
     
    </>
  )
}

export default App
