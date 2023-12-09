"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export default function Slider() {
  return (
    <Swiper
      style={{
        "--swiper-pagination-color": "#FFBA08",
        "--swiper-pagination-bullet-inactive-color": "#999999",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "16px",
        "--swiper-pagination-bullet-horizontal-gap": "6px",
      }}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
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
