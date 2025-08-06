import React from 'react'
import HeroImg from '/lost-and-found.png'
import { useNavigate } from "react-router-dom";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const HeroSection = () => {
  let navigate = useNavigate();
  return (
    <div className="h-screen w-full flex px-5 pl-12  mt-5">
      {/* Glow Background Circles
      <div className="absolute -top-25 right-99 size-50 bg-black/5 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-25 -right-25 size-90 bg-black/28 rounded-full blur-3xl"></div> */}
      <div className="w-[55%] py-12">
        <h1 className="text-4xl md:text-[3.3rem] font-semibold tracking-normal leading-tight">
  <span className="text-black">Lost Something</span>{" "}
  <span className="text-gray-600">On Campus?</span>
</h1>

<h1 className="text-4xl md:text-[3.3rem] font-semibold tracking-wide leading-tight text-black">
  Let's Help You Find It.
</h1>

        <p className="text-xl text-gray-600 my-8 ">
          Searched every corner of campus? Don’t stress! <br /> Post, search, or
          report lost and found items in minutes. <br /> Reconnect with what
          matters.
        </p>

        <div className="buttons flex flex-row mt-16">
          <button className="bg-black text-white px-6 py-3  flex items-center gap-2 hover:bg-gray-900 transition duration-200 cursor-pointer"  onClick={() => navigate("/reportitem")} >
          Report an Item
          <span className="text-xl">→</span>
        </button>
        <button className="ml-8 text-black px-6 py-3  flex items-center gap-2 border-2 border-black  transition duration-200 cursor-pointer" onClick={() => navigate('/found')} >
          Browse an Item
          <span className="text-xl">→</span>
        </button>
        </div>

       
      </div>
      {/* <img
  src="/arrow.png"
  alt="Arrow decoration"
  className="absolute top-[35%] left-[48%] w-25 h-14 sm:w-36 sm:h-20 md:w-40 md:h-24 md:top-[28%] md:left-[44%]"
/> */}

      <div className="w-[45%] p-3 relative ">
        <img src={HeroImg} alt="" className='w-[30rem] h-auto p-2 border-1 border-black rounded-lg' />
        <DotLottieReact
      src="https://lottie.host/f5534862-23bd-40fb-968f-c3fe202dbb27/3JtXpCGz1P.lottie"
      loop
      autoplay
      className="absolute -top-8 right-122 w-25 h-25 md:w-30 md:h-30"
    />
    <DotLottieReact
      src="https://lottie.host/d16118e6-1480-4d4e-8a94-2f2b69a58519/8ayq8nkoa1.lottie"
      loop
      autoplay
      className="absolute top-100 right-6 w-32 h-32 md:w-40 md:h-40 "
    />
      </div>

      {/* <img src="https://cdn.dribbble.com/userupload/21912385/file/original-3b2730a6850b7c4e28680b46c054f886.gif" alt="" className='absolute bottom-25 w-32 h-26 right-0 rounded-2xl shadow-2xs' /> */}
      
    </div>
  );
}

export default HeroSection