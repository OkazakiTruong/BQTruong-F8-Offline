"use client";

import { Carousel } from "react-responsive-carousel";

export default function Slider() {
  return (
    <Carousel
      style={{ height: "100vh" }}
      showThumbs={false}
      dynamicHeight={false}
    >
      <div>
        <img src="https://picsum.photos/1500/1200" />
      </div>
      <div>
        <img src="https://picsum.photos/1500/1200" />
      </div>
      <div>
        <img src="https://picsum.photos/1500/1200" />
      </div>
    </Carousel>
  );
}
