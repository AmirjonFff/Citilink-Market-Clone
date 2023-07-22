import React from "react";
import Swip from "./Swipers/Swiper2";
import { SwiperSlide } from "swiper/react";
import { useDispatch } from "react-redux";
import { addPerBasket } from "../../../reducers/basket";
import { useNavigate } from "react-router-dom";

function Xitu({ data }) {
  const dispath = useDispatch();
  const navigate = useNavigate()

  // const data = [
  //   {
  //     img: "home/xitu/img1.png",
  //     title: "Стиральная машина Beko WRE6512ZAW",
  //     price: "23 490",
  //   },
  //   {
  //     img: "home/xitu/img2.png",
  //     title: '32" Телевизор SunWind SUN- LED32XB200, HD, черный',
  //     price: "23 490",
  //   },
  //   {
  //     img: "home/xitu/img1.png",
  //     title: "Стиральная машина Beko WRE6512ZAW",
  //     price: "23 490",
  //   },
  //   {
  //     img: "home/xitu/img2.png",
  //     title: '32" Телевизор SunWind SUN- LED32XB200, HD, черный',
  //     price: "23 490",
  //   },
  //   {
  //     img: "home/xitu/img1.png",
  //     title: "Стиральная машина Beko WRE6512ZAW",
  //     price: "23 490",
  //   },
  //   {
  //     img: "home/xitu/img2.png",
  //     title: '32" Телевизор SunWind SUN- LED32XB200, HD, черный',
  //     price: "23 490",
  //   },
  // ];

  return (
    <div className="flex tablet:flex-col tablet:gap-5 mt-10">
      <h2 className="title w-[270px]">Хиты продаж</h2>
      <Swip>
        {data?.length &&
          data.map((el, i) => {
            return (
              <SwiperSlide key={i}>
                <div
                  onClick={() => {
                    dispath(addPerBasket(el));
                    navigate("perKarzinka");
                  }}
                  className="w-[240px] px-3 hover:shadow-xl cursor-pointer flex flex-col items-start "
                >
                  <img
                    className="!h-[200px] !object-contain"
                    src={`http://localhost:3000/${el.media[0].src}`}
                    alt=""
                  />
                  <p className="text-[#151528] mb-7 mt-3 text-[15px] text-start">
                    {el.name}
                  </p>
                  <p className="font-[500] text-[18px]">{el.price} сомон </p>
                </div>
              </SwiperSlide>
            );
          })}
      </Swip>
    </div>
  );
}

export default Xitu;
