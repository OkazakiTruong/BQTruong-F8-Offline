"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube } from "swiper/modules";
import "swiper/css/effect-cube";
export default function Slider() {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      modules={EffectCube}
      effect="cube"
    >
      <SwiperSlide>
        <img
          src="https://picsum.photos/1500/1000"
          alt=""
          className="h-screen w-screen"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://picsum.photos/1500/1000"
          className="h-screen w-screen"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://picsum.photos/1500/1000"
          className="h-screen w-screen"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
}
