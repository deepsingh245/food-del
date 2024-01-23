import React, { useState } from 'react'
import Navbar from '../components/Navbar'

function About() {
  const [current, setCurrent] = useState(false)
function currentHandler(){
  setCurrent(true)
  }
  return (
    <div>
      <Navbar onCurrent={currentHandler}/>
      <h1 className='about text-center text-black font-bold text-xl'>about</h1>
    </div>
  )
}

export default About
