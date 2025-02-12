'use client'
import React from 'react'
import { motion,AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const MobileMenu = ({clicked}) => {
    const path = usePathname()
return (
    <AnimatePresence mode='wait'>
        {clicked && (
            <motion.div
            initial={{opacity:0,y:-100}}
            animate={{opacity:1,y:0}}
            exit={{opacity:0,y:-100}}
            className='absolute top-20 left-0 w-full h-screen z-20'
            >
                <div className='text-xl font-semibold p-10 bg-white'>
                    {/*menu*/}
                    <ul className='md:hidden flex flex-col justify-center items-start  gap-10'>
                        <li className={`${path=="/"?"text-blue-600":""} hover:text-blue-600`}><Link href='/'>Home</Link></li>
                        <li className={`${path=="/pages/services_booking"?"text-blue-600":""} hover:text-blue-600`}><Link href='/pages/services_booking'>Services & Booking</Link></li>
                        <li className={`${path=="/pages/about"?"text-blue-600":""} hover:text-blue-600`}><Link href='/pages/about'>About</Link></li>
                        <li className={`${path=="/pages/contact"?"text-blue-600":""} hover:text-blue-600`}><Link href='/pages/contact'>Contact Us</Link></li>
                    </ul>
                </div>
            </motion.div>
        )}
    </AnimatePresence>
  )
}

export default MobileMenu