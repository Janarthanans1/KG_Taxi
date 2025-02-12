import React from 'react'
import Navbar from '@/app/components/navbar'
import Link from 'next/link'

const Home = () => {
  return (
    <>
      {/*header*/}
      <header className='bg-gradient-to-r from-blue-200 via-blue-100 to to-white w-full h-screen'>
        <Navbar/>
        <div className='pt-28 flex flex-col sm:pt-40 px-5'>
          <div>
            <p className='text-blue-500 font-bold text-xl sm:font-extrabold sm:text-2xl md:font-black md:text-3xl'>Book your ride with<br/><span className='text-black'>KODAI GANESH CALL TAXI</span><br/>for a fast and reliable service!</p>
            <button className='bg-blue-500 font-bold text-white py-2 px-4 my-5 rounded-full shadow-lg hover:bg-blue-600 hover:shadow-xl '><Link href='/pages/services_booking'>Book Your Ride</Link></button>
          </div>
          <img src="/bg.png" alt="header Image" className='w-[500px] h-[500px]'/>
        </div>
      </header>

      <div className='h-screen bg-yellow-300'>
      </div>
    </>
    
  )
}

export default Home