import React from "react";
import clsx from "clsx";
import Card from './Card';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';

export const Hand: React.FC = ({ children }) => {
  return (
    <div className='flex w-full h-96'>
      <Swiper
        slidesPerView={1.2}
        centeredSlides={true}
        spaceBetween={1}
        
        loop
      >
      { (Array.isArray(children) ? children : [children]).map(child => (
        <SwiperSlide >
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
    
  )
};

export default Hand;
