"use client";

import { Carousel } from "react-responsive-carousel";

export default function Slider() {
  return (
    <Carousel>
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
