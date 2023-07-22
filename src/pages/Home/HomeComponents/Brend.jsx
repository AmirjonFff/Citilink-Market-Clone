import React from "react";
import Swip from "./Swipers/Swiper2";
import { SwiperSlide } from "swiper/react";

function Brend() {
  const data = [
    {
      img: "home/brend/img1.png",
      link: "Новый пункт выдачи  заказов в г. С-Петербург, пр Испытателей, д 6",
    },
    {
      img: "home/brend/img2.png",
      link: "Ситилинк первым в России запустил продажи смартфона Itel P40",
    },
    {
      img: "home/brend/img3.png",
      link: "Новый пункт выдачи  заказов в г. С-Петербург, пр Испытателей, д 6",
    },
    {
      img: "home/brend/img4.png",
      link: "Ситилинк первым в России запустил продажи смартфона Itel P40",
    },
    {
      img: "home/brend/img5.png",
      link: "Ситилинк первым в России запустил продажи смартфона Itel P40",
    },
    {
      img: "home/brend/img6.png",
      link: "Ситилинк первым в России запустил продажи смартфона Itel P40",
    },
  ];

  return (
    <div className="flex mt-10">
      <div className="w-[270px]">
        <h2 className="title">Популярные бренды</h2>
        <button className="text-[#FE7200] text-[14px] mt-2">
          Все бренды  →
        </button>
      </div>
      <div className="flex justify-around w-full">
        {data.map((el, i) => {
          return (
            <div key={i} className="">
              <a href={el.link}>
                <img src={el.img} alt="" />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Brend;
