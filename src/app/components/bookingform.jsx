"use client"
import React, { useState } from 'react';
import Taxiform from './taxiform';

const BookingForm = () => {


  return (
    <div className="flex flex-col lg:flex-row gap-10 pb-10 px-6 lg:px-20">
      {/* Text Section */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="font-bold text-4xl text-blue-600">Book Your Ride Now!</h1>
        <p className="text-gray-500 mt-6 text-justify">
          Need a reliable and comfortable taxi? We’ve got you covered! Whether you’re heading to the airport, commuting to work, or exploring the city, our professional drivers ensure a safe and hassle-free journey.
        </p>
      </div>

      {/* Form Section */}
      <div className="lg:w-1/2">
        <Taxiform/>
      </div>
    </div>
  );
};

export default BookingForm;
