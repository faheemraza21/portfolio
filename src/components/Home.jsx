import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
const home = () => {
  return (
<div className='bg-[#000000] w-full h-screen'>
      
   <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
     <p className='text-pink-500'>Hi,I am</p>
     <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Faheem Raza</h1>
     <h2 className='text-4xl sm:text-7xl font-bold text-[#a6acbe]'>I'm a Frontend developer.</h2>
     <p className='text-[#a6acbe] py-4 max-w-[700px]'>
       Speciallize in building digital experience. Currently, focused in building responsive web applications.
     </p>
     <div>
        <button className='text-white border-2 px-6 py-3 my-2 flex items-center group hover:bg-pink-500 hover:border-pink-500'>My work  <span className='group-hover:rotate-90 duration-300' >
          <HiArrowNarrowRight  className='ml-3'/>
        </span></button>
        
      </div>
   </div>
      
    </div>
  )
}

export default home
