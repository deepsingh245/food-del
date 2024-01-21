import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Crousel from '../components/Crousel'
import Cards from '../components/Cards'


function Home() {
  return (
    <div className='h-full'>
      <Navbar/>
      <Crousel/>
      <Cards/>
      <Footer/>



    </div>
  )
}

export default Home
