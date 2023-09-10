"use client"
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules

import { Autoplay, Pagination, Navigation } from "swiper/modules";
const items = [
    {
      src: "/IMG_E4390.jpg",
    },
    {
      src: "/u1.jpg",
      
    },


  ];

const Banner = () => {
  return (
  
    <Swiper style={{width:"80%"}}
      
    // spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation,]}
    className="mySwiper"
  >
    <SwiperSlide >
    <Image
            src="/IMG_E4390.jpg"
            alt="banner"
              height={800}
              width={2000}
              style={{width:"100%",height:"auto"}}
          />
    </SwiperSlide>
    <SwiperSlide>
    <Image
            src="/u1.jpg"
            alt="banner"
            height={800}
            width={2000}
            style={{width:"100%",height:"auto"}}
            
          />
    </SwiperSlide>
    
    
  </Swiper>
    
  );
};
export default Banner;
