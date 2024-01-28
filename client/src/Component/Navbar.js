import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Login } from './Login';
export const Navbar = () => {

  return (
    <div className='flex flex-row items-center justify-between bg-[#9BE8D8] p-4'>
      <div className='flex items-center'>
        <img src="./pics/logo.svg" alt="" />
        <a href="" className="ml-4 text-black text-base font-medium font-['Poppins'] hover:text-sky-500">Home</a>
        <a href="" className="ml-4 text-black text-base font-medium font-['Poppins']  hover:text-sky-500">Products</a>
        <a href="" className="ml-4 text-black text-base font-medium font-['Poppins']  hover:text-sky-500">About</a>
        <a href="" className="ml-4 text-black text-base font-medium font-['Poppins']  hover:text-sky-500">Pricing</a>
      </div>
      <div className="flex items-center">
        <div className="text-black text-[8.15px] font-normal font-['Lato'] ml-4">Eng</div>
        <div className="w-[336px] h-11 ml-4 bg-lime-100 flex items-center gap-3">
          <input type="text" placeholder='Search For anything' />
        </div>
        <img src="" alt="" className="ml-4" />
        <div className="text-black text-xs font-normal font-['Inter'] ml-2">Rohit Shetty</div>
      </div>
      <Login />
    </div>

  )
}
