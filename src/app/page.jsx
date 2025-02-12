"use client"
import React from 'react'
import Navbar from '@/app/components/navbar'

const Home = () => {
  const al =()=>{
    alert('clicked')
  }
  return (
    <div className='bg-blue-300 w-full h-screen'>
      <Navbar/>

      <button onClick={al}>click</button>
    </div>
  )
}

export default Home