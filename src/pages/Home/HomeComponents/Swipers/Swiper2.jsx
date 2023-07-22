import React, { Children, useRef, useState } from "react";
import SwiperCore, { Virtual, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles2.css";

SwiperCore.use([Virtual, Navigation, Pagination]);

export default function Swip(props) {
  const [swiperRef, setSwiperRef] = useState(null);

  const prepend = () => {
    setSlides([
      `Slide ${prependNumber.current - 2}`,
      `Slide ${prependNumber.current - 1}`,
      ...slides,
    ]);
    prependNumber.current = prependNumber.current - 2;
    swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
  };

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={4}
        centeredSlides={true}
        navigation={true}
        virtual
      >
        {props.children}
      </Swiper>
    </>
  );
}
