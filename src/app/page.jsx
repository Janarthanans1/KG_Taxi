import React from 'react'
import Navbar from '@/app/components/navbar'
import Link from 'next/link'

const Home = () => {
  return (
    <>
      <div className='bg-gradient-to-r from-blue-200 via-blue-100 to to-white w-full h-screen'>
        <Navbar/>
        <div className='pt-28 flex flex-col sm:pt-40 px-5'>
          <div>
          <p className='text-blue-500 font-extrabold text-xl'>Book your ride with<br/><span>KODAI GANESH CALL TAXI</span><br/>for a fast and reliable service!</p>
          <button><Link href='/pages/services_booking'>Book</Link></button>
          </div>
          <img src="/bg.png" alt="" className='w-[500px] h-[500px]'/>
        </div>
      </div>
      <div className='h-screen bg-yellow-300'>
      </div>
    </>
    
  )
}

export default Home