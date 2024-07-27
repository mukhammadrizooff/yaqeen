/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./carousel.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function Carousel() {
  const swiper = useSwiper();
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        // navigation={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper text-xl"
      >
        <SwiperSlide>
          Ushbu platforma prototipini bizning talaba yaratganidan juda ham faxrlanamiz chunki
          ushbu loyiha odamlarni ishini qulaylashtirish hamda 
          uzog&apos;ini yaqin qilishda katta yordam beradi.
        </SwiperSlide>
        <SwiperSlide>
          Men advokat, yurist umumiy qilganda huquqshundurman 
          va men yaqeen ga ishonaman va sizlarga ham tavsiya beraman.
        </SwiperSlide>
        <SwiperSlide>
          Yaqeen ning ilk mijozlaridan biri sifatida ushbu loyiha haqida
          fikrim mutoloq ijobiydur va ishonchlikdur ham.
        </SwiperSlide>

        <div className="slider-controler flex max-md:justify-center  gap-3  mt-16">
          <div
            style={{ borderWidth: 1.5, borderRadius: 4 }}
            className={`swiper-button-prev static text-3xl font-semibold bg-red-500 border-2 border-red-500 px-5 py-0   duration-300 text-white hover:bg-white hover:text-red-500 transition-all `}
          >
            {"<"}
          </div>

          <div
            style={{ borderWidth: 1.5, borderRadius: 4 }}
            className={`swiper-button-next static text-3xl font-semibold bg-red-500 border-2 border-red-500 px-5 py-0   duration-300 text-white hover:bg-white hover:text-red-500 transition-all `}
          >
            {">"}
          </div>
        </div>
      </Swiper>
    </>
  );
}
