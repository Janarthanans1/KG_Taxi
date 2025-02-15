import React from 'react';

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
        <form className="w-full bg-blue-500 text-white font-semibold p-6 rounded-xl shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" placeholder="Your name" className="w-full bg-gray-100 p-4 rounded-full text-gray-600 focus:outline-none" />
            <input type="email" placeholder="Email address" className="w-full bg-gray-100 p-4 rounded-full text-gray-600 focus:outline-none" />
            <input type="tel" placeholder="Phone" className="w-full bg-gray-100 p-4 rounded-full text-gray-600 focus:outline-none" />
            <input type="number" placeholder="Number of Passengers" className="w-full bg-gray-100 p-4 rounded-full text-gray-600 focus:outline-none" />
            <input type="text" placeholder="Pick up address" className="w-full bg-gray-100 p-4 rounded-full text-gray-600 focus:outline-none" />
            <input type="text" placeholder="Drop off address" className="w-full bg-gray-100 p-4 rounded-full text-gray-600 focus:outline-none" />

            {/* Date Field */}
            <input type="date" className="w-full bg-gray-100 p-4 rounded-full text-gray-600 focus:outline-none" />

            {/* Time Field */}
            <input type="time" className="w-full bg-gray-100 p-4 rounded-full text-gray-600 focus:outline-none" />
          </div>

          {/* Car Type */}
          <div className="mt-5">
            <h2 className="text-lg">Car Type</h2>
            <div className="flex gap-4 mt-2">
              <label className="flex items-center gap-2">
                <input type="radio" name="car_type" className="accent-blue-600 scale-150" />
                4 Seater
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="car_type" className="accent-blue-600 scale-150" />
                6 Seater
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="mt-6 w-full bg-white text-blue-600 font-bold py-3 rounded-full hover:bg-gray-200 transition">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
