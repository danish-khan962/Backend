import React from 'react'
import { FaSquarePlus } from "react-icons/fa6";
import { FaLayerGroup } from "react-icons/fa";
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='flex flex-row justify-between items-center px-3 bg-blue-200 xs:flex-col xs:pb-5'>
      <div>
        <img src={assets.logo2} alt="" className='h-[130px] xs:h-[100px] bg-blue-200'/>
      </div>
      <div className='flex flex-row justify-center items-center gap-x-10 bg-blue-200'>
        <Link to={'/'} className='flex flex-row justify-center items-center text-[19px] gap-x-2 bg-[#000] text-[#fff] py-[10px] px-[20px] rounded-[7px] outline-none border-none xs:text-[17px] hover:bg-[#212121] transition-all 200ms ease-in-out hover:scale-95'>New Post <FaSquarePlus/></Link >
        <Link to={'/read'} className='flex flex-row justify-center items-center text-[19px] gap-x-2 bg-[#000] text-[#fff] py-[10px] px-[20px] rounded-[7px] outline-none border-none xs:text-[17px] hover:bg-[#212121] transition-all 200ms ease-in-out hover:scale-95'>All Post <FaLayerGroup/></Link >
      </div>
    </nav>
  )
}

export default Navbar
