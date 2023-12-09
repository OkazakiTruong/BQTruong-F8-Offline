"use client";

import { Swiper, SwiperSlide } from "swiper/react";

export default function Slider() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src="https://picsum.photos/1500/1000" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/1500/1000" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/1500/1000" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/1500/1000" alt="" />
      </SwiperSlide>
    </Swiper>
  );
}
