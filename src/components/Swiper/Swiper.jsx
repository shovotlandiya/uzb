import React, { useRef, useState, useEffect } from "react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper";
import { useSwiper } from "swiper/react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

const Slider = ({ slides }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, A11y]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <Image className="w-full" src={slide.src} alt={slide.src} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
