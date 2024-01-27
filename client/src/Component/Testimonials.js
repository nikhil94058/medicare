import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Testimonials = () => {
  return (
    <div>
      <center>
        <div className="text-black text-[65px] font-normal font-['Inter']">Testimonials<br /><br /></div>
        <div className="text-black text-[37px] font-normal font-['Inter']">Who are maintaing their good health and diet from doctors</div>
        <Card />
        <br />
        <br />
        <br />
        <button className='w-[515px] h-[78px] bg-lime-100 rounded-[10px] border border-blue-800'>Read More Reviews</button>
      </center>
    </div>
  );
};

const Card = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className='mt-20 ml-7'>
      <Slider {...settings}>
        {data.map((d, index) => (
          <div key={index} className='max-w-sm rounded overflow-hidden shadow-lg bg-[#F8FDCF] w-[609px]'>
            <div className='flex space-x-0.5 > * + *'>
              <div>
                <img className="w-[182px] h-[182px] rounded-full shadow border-2 border-indigo-300" src="https://via.placeholder.com/182x182" />
              </div>
              <div className='text-black text-[40.35px] font-normal'>{d.name}</div>
            </div>
            <div className=''>

              <div className="text-blue-800 text-7xl font-normal font-['Inter'] lowercase">“</div>
              <div>{d.comment}</div>
              <div className="origin-top-left rotate-180 text-blue-800 text-7xl font-normal font-['Inter'] lowercase">“</div>
            </div>
            <br />
            <button className='ml-[300px]'>Read more</button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const data = [
  {
    name: 'Akhil Reddy',
    img: 'AyurMed/client/src/logo.svg', // Corrected image path
    comment: 'Good As good Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
  },
  {
    name: 'Another Name',
    img: 'AyurMed/client/src/another-logo.svg', // Corrected image path
    comment: 'Another testimonial text.'
  },
  {
    name: 'Akhil Reddy',
    img: 'AyurMed/client/src/logo.svg', // Corrected image path
    comment: 'Good As good Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
  },
  {
    name: 'Akhil Reddy',
    img: 'AyurMed/client/src/logo.svg', // Corrected image path
    comment: 'Good As good Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
  },
  {
    name: 'Akhil Reddy',
    img: 'AyurMed/client/src/logo.svg', // Corrected image path
    comment: 'Good As good Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
  },
  {
    name: 'Akhil Reddy',
    img: 'AyurMed/client/src/logo.svg', // Corrected image path
    comment: 'Good As good Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
  },
  {
    name: 'Akhil Reddy',
    img: 'AyurMed/client/src/logo.svg', // Corrected image path
    comment: 'Good As good Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
  },
  // Add more testimonials as needed
];
