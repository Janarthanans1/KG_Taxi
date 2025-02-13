import React from 'react'

const FastBooking = () => {
  return (
    <div className='flex justify-between items-center'>
        <div className='text-white'>
            <p className='font-bold text-2xl'>FAST BOOKING</p>
            <p className='w-96 mt-3'>"Fast & Hassle-Free Booking: Our easy-to-use platform helps you book your taxi in just a few clicks. Choose your pickup location, select the date, and you're all set for a smooth, stress-free ride!"</p>
        </div>
        <div>
            <form>
                <div className='flex flex-col gap-5'>
                    <input type="text" className='w-[700px] py-2 px-2 rounded-lg' placeholder='Enter your pickup location' />
                    <div className='flex flex-row gap-5'>
                        <input type="date" className='w-[340px] py-2 px-2 rounded-lg'/>
                        <input type="text" className='w-[340px] py-2 px-2 rounded-lg' placeholder='Mobile number' />
                    </div>
                    <button className='font-bold bg-white py-2 px-2 shadow-sm rounded-lg'>Book Now</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default FastBooking