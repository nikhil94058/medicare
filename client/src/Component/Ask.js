import React from 'react'

const Ask = () => {
  return (
    <div><center>
      <div className="object-contain bg-emerald-200   items-center">
        <div className="text-black text-[64px] font-normal font-['Josefin Sans'] capitalize">who are you?</div>
        <br />
        <div className=' flex items-center justify-between'> <div className='m-5'>
          <a href=""><img className="w-[322px] h-[334px]" src="./pics/doctor.svg" data-aos="flip-left" /></a>
          <div className="text-black text-5xl font-normal font-['Josefin Sans'] capitalize">Doctor</div>
        </div>
          <div className='m-5'>
            <a href=""><img className="w-[322px] h-[334px]" src="./pics/patient.svg" data-aos="flip-right" /></a>
            <div className="text-black text-5xl font-normal font-['Josefin Sans'] capitalize">Patient</div>
          </div></div>
      </div>
    </center></div>
  )
}





export default Ask