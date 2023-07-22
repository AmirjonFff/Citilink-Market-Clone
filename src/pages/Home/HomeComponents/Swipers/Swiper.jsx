import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import { Autoplay, Pagination, Navigation } from "swiper";

export default function Swap() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://cdn.citilink.ru/mMqGHgKDX6HUX7dpcG1KiP6yM8vXxETXO4f9QIVfq_M/resizing_type:fit/gravity:sm/width:1186/height:350/plain/banners/nw_banner_1_14200_A_1673866462.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.citilink.ru/YlIllBo4fExZbgTAVF-0u-SZth0-bz7ncjNXe_cQEyg/resizing_type:fit/gravity:sm/width:1186/height:350/plain/banners/nw_banner_1_09051_A_1660547611.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.citilink.ru/7ggldfeHFBcL1pkYXg1lg7oBN21YFTKlHMivOv4jxJc/resizing_type:fit/gravity:sm/width:1186/height:350/plain/banners/nw_banner_1_17322_A_1688139006.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.citilink.ru/mMqGHgKDX6HUX7dpcG1KiP6yM8vXxETXO4f9QIVfq_M/resizing_type:fit/gravity:sm/width:1186/height:350/plain/banners/nw_banner_1_14200_A_1673866462.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.citilink.ru/YlIllBo4fExZbgTAVF-0u-SZth0-bz7ncjNXe_cQEyg/resizing_type:fit/gravity:sm/width:1186/height:350/plain/banners/nw_banner_1_09051_A_1660547611.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.citilink.ru/7ggldfeHFBcL1pkYXg1lg7oBN21YFTKlHMivOv4jxJc/resizing_type:fit/gravity:sm/width:1186/height:350/plain/banners/nw_banner_1_17322_A_1688139006.jpg"
            alt=""
          />
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
