import React from "react";
import clsx from "clsx";
import Card from './Card';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';

export const Hand: React.FC = ({ children }) => {
  return (
    <div className='flex w-full h-96 -mx-10'>
      <Swiper
        slidesPerView={1.2}
        centeredSlides={true}
        spaceBetween={1}
        
        loop
      >
      { React.Children.toArray(children).map(child => (
        <SwiperSlide >
          {({isActive}: {isActive: boolean})=> (
            React.cloneElement(child as any, { isVisible: isActive })
          )}
          
        </SwiperSlide>
      )) }
    </Swiper>
    </div>
    
  )
};

export default Hand;
