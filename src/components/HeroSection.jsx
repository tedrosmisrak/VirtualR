import React from 'react'
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
const HeroSection = () => {
  return (
    <div className='flex flex-col items-center mt-6 lg:mt-20'>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            Vertualr build tools <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'> for developers</span> 
        </h1>
        <p className="max-w-4xl mt-10 text-center text-neutral-500">
            Empower Your creativity and bring your VR ideas tp life with our intuitive development tools. Get Started today and turn your imagination in to immersive reality
        </p>
        <div className="grid sm:grid-rows-2 space-y-5 sm:space-y-0 md:grid-cols-2  justify-center my-10">
            <a href="#" className='bg-gradient-to-r text-center from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md'>
                Start for free
            </a>
            <a href="#" className=' py-3 px-4 mx-3 rounded-md border '>
                Documentation
            </a>
        </div>
        <div className="flex sm:flex-row flex-col  mt-10 justify-center gap-2 ">
            <video
             autoPlay 
             loop
              muted 
               className='rounded-lg w-full sm:w-1/3 md:w-2/5 border border-orange-700 shadow-orange-400 mx-2 my-4' >
            <source src={video1} type='video/mp4'/>
            your browser does not support the video tag
            </video>
            <video
             autoPlay 
             loop
              muted 
               className='rounded-lg w-full sm:w-1/3  md:w-2/5  border border-orange-700 shadow-orange-400 mx-2 my-4' >
            <source src={video2} type='video/mp4'/>
            your browser does not support the video tag
            </video>
        </div>
    </div>
  )
}

export default HeroSection