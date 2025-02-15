"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { CgProfile } from 'react-icons/cg'
import { FiMenu } from 'react-icons/fi'
import { usePathname } from 'next/navigation'
import MobileMenu from '@/app/components/mobilemenu'

const Navbar = () => {
  const [profile,setProfile] = useState(false)
  const [mobileMenu,setMobileMenu] = useState(false)
  const path = usePathname()
  //mobile menu 
  const mobileList = () =>{
    setMobileMenu(!mobileMenu)
  }
  return (
    <>
      <nav className='fixed font-medium bg-white w-full shadow-xl z-50 px-5 lg:px-20'>
        <div className='flex justify-between items-center p-5'>
          {/*logo */} 
        <h2 className='font-bold text-lg  md:font-black md:text-xl'><span className='text-blue-600 text-xl'>KG</span> Taxi</h2>
        
        {/*menu*/}
        <ul className='hidden md:flex justify-center items-center uppercase gap-10'>
            <li className={`${path=="/"?"text-blue-600":""} hover:text-blue-600`}><Link href='/'>Home</Link></li>
            <li className={`${path=="/pages/booking"?"text-blue-600":""} hover:text-blue-600`}><Link href='/pages/booking'>Book a Ride</Link></li>
            <li className={`${path=="/pages/about"?"text-blue-600":""} hover:text-blue-600`}><Link href='/pages/about'>About</Link></li>
            <li className={`${path=="/pages/contact"?"text-blue-600":""} hover:text-blue-600`}><Link href='/pages/contact'>Contact Us</Link></li>
        </ul>

        {/*sign up or profile */}
        <div className='flex items-center gap-5'>
          {profile?
          (<div className='font-bold text-3xl'>
            <Link href='/pages/userprofile'>
              <CgProfile/>
            </Link>
          </div>):
          (<div>
            <button className='bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full'>Sign Up</button>
          </div>)}

            {/*mobile menu*/}
            <button className='font-bold text-2xl md:hidden' onClick={mobileList}>
              <FiMenu/>
            </button>
        </div>
        </div>
        
      </nav>
      {mobileMenu?<MobileMenu clicked={mobileMenu} setMobileMenu={setMobileMenu} />:null}
    </>
    
  )
}

export default Navbar