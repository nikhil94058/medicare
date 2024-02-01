import React from 'react'
import { User, useAuth0 } from "@auth0/auth0-react";
import { Login } from './Login';
import Search from './Search';

export const Navbar = () => {

  return (
    <div className='flex flex-row items-center justify-between bg-[#1447FB] p-4 h-24'>
      <div className='flex items-center'>
        <a href="/home"><img src="/res/logo.svg" alt="" /></a>
        <a href="/" className="ml-4 text-black text-base font-medium font-['Poppins'] hover:text-sky-500">Home</a>
        <a href="/product" className="ml-4 text-black text-base font-medium font-['Poppins']  hover:text-sky-500">Products</a>
        <a href="/about" className="ml-4 text-black text-base font-medium font-['Poppins']  hover:text-sky-500">About</a>
        <a href="/help" className="ml-4 text-black text-base font-medium font-['Poppins']  hover:text-sky-500">Help</a>
        <a href="/contact" className="ml-4 text-black text-base font-medium font-['Poppins']  hover:text-sky-500">Contact Us</a>
      </div>
      <div className="flex items-center">
        <div className="text-black text-[8.15px] font-normal font-['Lato'] ml-4 mr-5">Eng</div>
        <Search />


        <img src="" alt="" className="ml-4" />

      </div>
      <Login />

    </div>

  )
}

