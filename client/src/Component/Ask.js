
/* <div><center>
      <div className="object-contain bg-emerald-200 ">
        <div className="text-black text-[64px] font-normal font-['Josefin Sans'] capitalize">who are you?</div>
        <br />
        <div className=' flex m-[200px]'> <div className='m-5'>
          <a href=""><img className="w-[322px] h-[334px]" src="./res/doctor.svg" data-aos="flip-left" /></a>
          <div className="text-black text-5xl font-normal font-['Josefin Sans'] capitalize">Doctor</div>
        </div>
          <div className='m-5'>
            <a href=""><img className="w-[322px] h-[334px]" src="./res/patient.svg" data-aos="flip-right" /></a>
            <div className="text-black text-5xl font-normal font-['Josefin Sans'] capitalize">Patient</div>
          </div></div>
      </div>
  </center></div>*/




import React from 'react';

const Ask = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="object-contain bg-emerald-200 p-8 rounded-lg w-full">
        <div className="text-black text-4xl font-normal font-josefin capitalize mb-8">
          Who are you?
        </div>
        <div className="flex space-x-8">
          <div className="text-center p-4 ml-[90px] mr-[800px]">
            <a href="/" className=''>
              <img
                className="w-[322px] h-[334px]"
                src="./res/doctor.svg"
                alt="Doctor"
                data-aos="flip-left"
              />
              <div className="text-black text-2xl font-normal font-josefin capitalize">
                Doctor
              </div>
            </a>
          </div>
          <div className="text-center">
            <a href="/">
              <img
                className="w-[322px] h-[334px] mb-4"
                src="./res/patient.svg"
                alt="Patient"
                data-aos="flip-right"
              />
              <div className="text-black text-2xl font-normal font-josefin capitalize">
                Patient
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ask;
