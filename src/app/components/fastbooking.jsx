import React from 'react'

const FastBooking = () => {
  return (
    <div className='px-10 flex flex-col md:flex-row md:justify-between  items-center'>
        <div className='text-white'>
            <p className='font-bold text-2xl text-center'>FAST BOOKING</p>
            <p className='w-72 sm:w-80 md:w-96 lg:w-[450px] py-5 text-justify'>"Fast & Hassle-Free Booking: Our easy-to-use platform helps you book your taxi in just a few clicks. Choose your pickup location, select the date, and you're all set for a smooth, stress-free ride!"</p>
        </div>
        <div>
            <form>
                <div className='flex flex-col gap-5 w-[300px] sm:w-[350px] md:w-[300px] lg:w-[450px]'>
                    <input type="text" className='w-full py-2 px-2 rounded-lg' placeholder='Enter your pickup location' />
                    <div className='flex flex-col md:flex-row gap-5'>
                        <input type="date" className='w-full md:w-1/2 py-2 px-2 rounded-lg'/>
                        <input type="text" className='w-full md:w-1/2 py-2 px-2 rounded-lg' placeholder='Mobile number' />
                    </div>
                    <button className='font-bold bg-white py-2 px-2 shadow-sm rounded-lg'>Book Now</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default FastBooking