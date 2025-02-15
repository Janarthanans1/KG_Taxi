import React from 'react'
import BookingForm from '../../components/bookingform'
import Footer from '../../components/footer'


const BookARide = () => {
  return (
    <>
      <div className='bg-gray-200 h-fit pt-40'>
         <BookingForm/>
      
      <footer className='bg-blue-950 text-white'>
        <Footer/>
      </footer>
      </div>
    </>
  )
}

export default BookARide