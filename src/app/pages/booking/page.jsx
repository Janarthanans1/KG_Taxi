import React from 'react'
import BookingForm from '../../components/bookingform'
import DateTimeInput from '../../components/date'

const BookARide = () => {
  return (
    <div className='bg-gray-200 pt-28 px-10 lg:px-20 h-full'>
      <div>
         <BookingForm/>
         <DateTimeInput/>
      </div>
    </div>
  )
}

export default BookARide