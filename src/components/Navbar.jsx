import React,{useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import logo from  '../assests/logo.png'
import { FaLinkedin,FaGithub } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
const Navbar = () => {
const [nav, setNav] = useState(false)
const handleClick = () => setNav(!nav)

  return (
    <div className='fixed flex justify-between items-center px-4 w-full h-[80px] bg-[#00000]'>
      <div>
          <img src={logo} alt='logo' className='w-full h-[250px] relative py-5 '/>
     
      </div>



        <ul className='hidden md:flex text-zinc-200'>
            <li>
            <Link to="home" smooth={true}  duration={500} >
          Home
        </Link>
            </li>
            <li>
            <Link to="about" smooth={true}  duration={500} >
         About
        </Link>
            </li>
            <li>
            <Link to="skills" smooth={true}  duration={500} >
          Skills
        </Link>
            </li>
            <li>
            <Link to="work" smooth={true}  duration={500} >
          Work
        </Link>
            </li>
            <li>
            <Link to="contact" smooth={true}  duration={500} >
          Contact
        </Link>
            </li>
        </ul>
     
      
      <div onClick={handleClick} className='md:hidden z-10'>
       {!nav ? <FaBars className='text-white'/>:<FaTimes className='text-white'/>}
      </div>


    
        <ul className={!nav ? 'hidden':'absolute  top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-[#000000]'}>
          
            <li className='py-6  text-2xl text-gray-50'>  <Link onClick={handleClick} to="home" smooth={true}  duration={500} >
          Home
        </Link></li>
            <li className='py-6  text-2xl text-gray-50'>  <Link onClick={handleClick} to="about" smooth={true}  duration={500} >
         About
        </Link></li>
            <li className='py-6  text-2xl text-gray-50'><Link onClick={handleClick} to="skills" smooth={true}  duration={500} >
          Skills
        </Link></li>
            <li className='py-6  text-2xl text-gray-50'>  <Link  onClick={handleClick} to="work" smooth={true}  duration={500} >
          Work
        </Link></li>
            <li className='py-6  text-2xl text-gray-50'>     <Link onClick={handleClick} to="contact" smooth={true}  duration={500} >
          Contact
        </Link></li>
       
        </ul>

        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
            <a  href='https://github.com/faheemraza21' className='flex justify-between items-center w-full text-gray-300'>
                Linkedin <FaLinkedin size={30} />
            </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  bg-[#333333]'>
            <a  href='/' className='flex justify-between items-center w-full text-gray-300'>
                GitHub <FaGithub size={30} />
            </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a  href='/' className='flex justify-between items-center w-full text-gray-300 '>
                Mail <HiOutlineMail size={30} />
            </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  bg-[#565f69]'>
            <a  href='/' className='flex justify-between items-center w-full text-gray-300'>
                Resume <BsFillPersonLinesFill size={30} />
            </a>
            </li>
            
        

        </ul>
                 

        </div>
      
    </div>
  )
}

export default Navbar

