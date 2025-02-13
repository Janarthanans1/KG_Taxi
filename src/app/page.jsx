"use client"
import React from 'react'
import Navbar from '@/app/components/navbar'
import Link from 'next/link'
import FastBooking from '@/app/components/fastbooking'


const Home = () => {
  // const [mobileMenu,setMobileMenu] = useState(false)
  return (
    <>
      {/*header*/}
        {/* {mobileMenu && <MobileMenu clicked={mobileMenu} setMobileMenu={setMobileMenu}/>} */}
        <Navbar/>
      <header className='bg-gradient-to-r from-blue-200 via-blue-100 to to-white w-full h-fit pb-40'>
        <div className='pt-28 px-5 flex flex-col sm:pt-[110px] sm:flex-row sm:justify-between sm:items-center'>
          <div>
            <p className='text-blue-500 font-bold text-xl sm:font-extrabold sm:text-2xl md:font-black md:text-2xl lg:text-4xl'>Book your ride with<br/><span className='text-black'>KODAI GANESH CALL TAXI</span><br/>for a fast and reliable service!</p>
            <button className='bg-blue-500 font-bold text-white py-2 px-4 my-5 rounded-full shadow-lg border-2 border-blue-500 hover:bg-blue-600 hover:shadow-xl '><Link href='/pages/services_booking'>Book Your Ride</Link></button>
          </div>
          <img src="/header.png" alt="header Image" className='w-80 h-80 sm:w-80 sm:h-80 md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px]'/>
        </div>
      </header>

      {/*section 1*/}
      <section className='h-fit py-10 bg-blue-950'>
        <FastBooking/>
      </section>
    </>
    
  )
}

export default Home