"use client"
import React from 'react'
import Navbar from '@/app/components/navbar'
import Link from 'next/link'
import FastBooking from '@/app/components/fastbooking'
import WhyChooseUs from '@/app/components/whychooseus'
import Services from '@/app/components/services'
import Footer from '@/app/components/footer'


const Home = () => {
  // const [mobileMenu,setMobileMenu] = useState(false)
  return (
    <>
      {/*header*/}
        {/* {mobileMenu && <MobileMenu clicked={mobileMenu} setMobileMenu={setMobileMenu}/>} */}
        <Navbar/>
      <header className='bg-gradient-to-r from-blue-200 via-blue-100 to to-white w-full h-fit pb-10'>
        <div className='pt-28 px-10 md:px-20 flex flex-col gap-12 items-center sm:pt-[110px] sm:flex-row sm:justify-between sm:items-center'>
          <div>
            <p className='text-blue-500 font-bold text-xl sm:font-extrabold sm:text-2xl md:font-black md:text-2xl lg:text-4xl'>Book your ride with<br/><span className='text-blue-950'>KODAI GANESH CALL TAXI</span><br/>for a fast and reliable service!</p>
            <button className='bg-blue-500 font-bold text-white py-2 px-4 my-5 rounded-full shadow-lg border-2 border-blue-500 hover:bg-blue-600 hover:shadow-xl '><Link href='/pages/booking'>Book Your Ride</Link></button>
          </div>
          <img src="/header.png" alt="header Image" className='w-80 h-80 sm:w-80 sm:h-80 md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px]'/>
        </div>
      </header>

      {/*section 1 services*/}
      <section className='py-10 px-10 lg:px-20 bg-gray-100'>
        <Services/>
      </section>

      {/*section 2 fast booking form*/}
      <section className='h-fit py-10 px-10 lg:px-20 bg-blue-500'>
        <FastBooking/>
      </section>

      {/*section 3 feedback form*/}
      <section className='h-fit py-10 px-10 lg:px-20 bg-gray-100'>
        <WhyChooseUs/>
      </section>

      {/*Footer*/}
      <footer className='h-fit py-10 px-10 lg:px-20 text-white bg-blue-950'>
        <Footer/>
      </footer>
    </>
    
  )
}

export default Home