import React from 'react'
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";


const PickupGuidelines = () => {
    let navigate = useNavigate();
  return (
    <div className='min-h-screen max-w-full  bg-gradient-to-br from-zinc-900 via-black to-zinc-800 
                relative overflow-hidden p-8 border border-white/10 shadow-xl text-white flex justify-center ' >
    {/* Glow Background Circles */}
      <div className="absolute -top-16 -left-16 w-80 h-80 bg-white/7 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-white/7 rounded-full blur-2xl"></div>

    <div className=" max-w-6xl flex  flex-col text-center space-y-3   p-5">
  <h1 className="text-4xl md:text-6xl font-bold text-center">
    <span className="text-gray-500">PickUp</span>{' '}
    <span className="text-white">Guidelines</span>
  </h1>
  <p className="text-base md:text-lg font-normal text-gray-200 max-w-2xl mx-auto leading-relaxed">
    Follow these guidelines to ensure a smooth pickup process for lost items.
  </p>
   {/* Back to Home Button */}
          <button
            onClick={() => navigate("/")}
            className="absolute top-4 left-4 bg-black border border-gray-300 rounded-full p-4 shadow hover:bg-gray-800 transition cursor-pointer"
            title="Back to Home"
          >
            <IoIosArrowBack className="text-xl text-white" />
          </button>
  <div className='text-left mt-5 bg-zinc-800/50 backdrop-filter backdrop-blur-sm p-6 rounded-sm border border-zinc-700 shadow-lg transition-all duration-300 hover:bg-zinc-700/50 hover:border-zinc-600 transform hover:-translate-y-1' >
    <h1 className='text-2xl text-white' >Bring Valid Identification</h1>
    <p className='text-gray-300 mt-1' >Make sure to bring your college ID card or any government-issued ID to verify your identity.</p>
  </div>
  <div className='text-left bg-zinc-800/50 backdrop-filter backdrop-blur-sm p-6 rounded-sm border border-zinc-700 shadow-lg transition-all duration-300 hover:bg-zinc-700/50 hover:border-zinc-600 transform hover:-translate-y-1' >
    <h1 className='text-2xl text-white  ' >Describe the Item</h1>
    <p className='text-gray-300 mt-1' >You will be asked to describe the item you lost. Mention unique identifiers (color, brand, contents, etc.).</p>
  </div>
  <div className='text-left bg-zinc-800/50 backdrop-filter backdrop-blur-sm p-6 rounded-sm border border-zinc-700 shadow-lg transition-all duration-300 hover:bg-zinc-700/50 hover:border-zinc-600 transform hover:-translate-y-1' >
    <h1 className='text-2xl text-white' >Visit During Working Hours</h1>
    <p className='text-gray-300 mt-1' >Lost items can only be picked up during office hours (e.g., 10:00 AM - 5:00 PM on working days).</p>
  </div>
  <div className='text-left bg-zinc-800/50 backdrop-filter backdrop-blur-sm p-6 rounded-sm border border-zinc-700 shadow-lg transition-all duration-300 hover:bg-zinc-700/50 hover:border-zinc-600 transform hover:-translate-y-1' >
    <h1 className='text-2xl text-white' >Provide Proof of Ownership</h1>
    <p className='text-gray-300 mt-1 ' >If you have a receipt, photo, or any other proof that the item belongs to you, please present it.</p>
  </div>
    </div>

    </div>
  )
}

export default PickupGuidelines