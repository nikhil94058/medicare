import React from 'react'

export const Testimonials = () => {
  return (
    <div className='items-center'><div className="text-black text-[65px] font-normal font-['Inter']">Testimonials<br /><br /></div>
      <div className="text-black text-[37px] font-normal font-['Inter']">Who are maintaing their good health and diet from doctors</div>
      <Card />
    </div>
  )
}


const Card = () => {
  return (
    <div className="w-[609px] h-[821px] bg-lime-100 rounded-[19.48px] border border-blue-800">
      <div className='flex'><img className="w-[182px] h-[182px] rounded-full shadow border-2 border-indigo-300" src="https://via.placeholder.com/182x182" />
        <div>
          Hello
        </div></div>
    </div>

  )
}

