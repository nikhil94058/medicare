import React from 'react'

export const Hero = () => {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{
      backgroundImage: "url(/res/slider-home1.svg)", backgroundSize: "cover",
      backgroundPosition: "center"
    }}>
      <div className='p-5'>
        <div className="text-black text-4xl font-normal font-['Inika'] capitalize ml-[125px] mt-[135px]">Your Medical History</div>
        <div className="w-[353px] text-black text-2xl font-normal font-['KoHo'] ml-[125px] mt-[10px]">Upload your prescriptions and get alerts for your medicines and personalized diet recommendations</div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-[125px] mt-[20px]'><div className="text-white text-2xl font-bold font-['KoHo']">Get Started</div></button>
      </div>
    </div>

  )
}
