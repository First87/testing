"use client"
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const MainSlide = () => {
  return (
  
    <Swiper
    style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"1rem"}}
    
    autoplay={{ delay: 3000 }}
    slidesPerView={4}
    centeredSlides={false}
    slidesPerGroupSkip={2}
    grabCursor={true}
    keyboard={{
      enabled: true,
    }}
    breakpoints={{
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      600: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    scrollbar={false}
    className="mySwiper"
  >
    <SwiperSlide>
    <div className="  m-10 relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src="https://drive.google.com/uc?export=download&id=1MDWAhkubEf6XtzAAJRRM68UZyeclX30Y"
                    alt="22"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src="https://drive.google.com/uc?export=download&id=1nz9VWfqXSR1L9xMCfb9zJaa2JB3rEGrK"
                    alt="22"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src="https://drive.google.com/uc?export=download&id=1nyd6R2hU6GGtVXDGfoh5BNcdlD1Se2Sn"
                    alt="22"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src="https://drive.google.com/uc?export=download&id=1--OZSnB4rwp2k-H1UraMbQ_gV99tsl7b"
                    alt="22"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src="https://drive.google.com/uc?export=download&id=1dvObmOuRkHZ3zXoDfDGkuN_8x6bCmVlK"
                    alt="22"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src="https://drive.google.com/uc?export=download&id=1ztjmZtASppD8-AMbj6cWiMAYaxOw3UiW"
                    alt="22"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
    </SwiperSlide>
  </Swiper>
    
  );
};
export default MainSlide;
