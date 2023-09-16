import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from "next/link";
import 'swiper/css/navigation';
import ProductsData from "./productsData";
import { stainlessProducts, aluminumProducts,mirrorProducts,accessoriesstainlessProducts,ceilingtoolsProducts,roofProducts } from '../components/productsData'

// import required modules

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const MainSlide = () => {
  // รวมข้อมูลจากหลายประเภทของสินค้าเข้าด้วยกัน
  const allProducts = [
    ...stainlessProducts,
    ...aluminumProducts,
    ...mirrorProducts,
    ...accessoriesstainlessProducts,
    ...ceilingtoolsProducts,
    ...roofProducts


    // เพิ่มประเภทของสินค้าเพิ่มเติมตามต้องการ
  ];

  return (
    <>
      <h2 className="text-2xl text-center py-4 font-bold tracking-tight text-black sm:text-2xl">
        สินค้าแนะนำ
      </h2>
      <Swiper
        className="mySwiper"
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
      >
        {allProducts.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="card-wrapper card-e max-w-345">
              
              <img
                className="object-cover card-slide"
                src={product.src}
                alt={product.title}
                height="150"
              />
              
              <div className=""
              >
                <h5 className="text-sm text-center font-semibold absolute top-20 card-content-1" >
                {product.title.length > 35? `${product.title.substring(0, 35)}...` : product.title}
                </h5>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default MainSlide;
