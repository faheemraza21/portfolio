import React from 'react'
import Html from "../assests/html.png";
import Css from '../assests/css.png';
import Java from '../assests/java.png';
import Python from '../assests/python.png';
import REACT from '../assests/react.png';
import Tailwind from '../assests/tailwind.png';

const Skills = () => {
  return (
    <div name='skills' className='bg-[#000000] text-gray-300'>

    <div  className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p   className='text-4xl font-bold inline border-b-4 border-pink-500 '>
                Experience
            </p>
            <p className='py-6'>
                //This are the technology I've worked with.
            </p>
        </div>

         <div className='  w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md  shadow-[#040c16] hover:scale-110 duration-500   mx-auto'>
                        <img   className='w-20 mx-auto py-4'  src={Html} alt="html icon" />
                        <p className='my-6'>
                            HTML
                        </p>

              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 mx-auto'>
                        <img   className='w-20 mx-auto py-4'  src={Css} alt="html icon" />
                        <p className='my-6'>
                            CSS
                        </p>

              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 mx-auto'>
                        <img   className='w-20 mx-auto py-4'  src={Java} alt="html icon" />
                        <p className='my-6'>
                            Javascript
                        </p>

              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 mx-auto'>
                        <img   className='w-20 mx-auto py-4'  src={Python} alt="html icon" />
                        <p className='my-6'>
                          Python
                        </p>

              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 mx-auto'>
                        <img   className='w-20 mx-auto py-4'  src={REACT} alt="html icon" />
                        <p className='my-6'>
                           React
                        </p>

              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 mx-auto'>
                        <img   className='w-20 mx-auto py-4'  src={Tailwind} alt="html icon" />
                        <p className='my-6'>
                            Tailwind
                        </p>
            </div>
           

           </div>

           </div>
    </div>          
             
  )
      
     
}

export default Skills
