import React from "react";
import Swip from "./Swipers/Swiper2";
import { SwiperSlide } from "swiper/react";

function Info() {
  const data = [
    {
      dey: "26 июня",
      title:
        "Новый пункт выдачи  заказов в г. С-Петербург, пр Испытателей, д 6",
      desc: "Первый день работы – 26 июня 2023",
    },
    {
      dey: "26 июня",
      title: "Ситилинк первым в России запустил продажи смартфона Itel P40",
      desc: "Первый день работы – 26 июня 2023",
    },
    {
      dey: "26 июня",
      title:
        "Новый пункт выдачи  заказов в г. С-Петербург, пр Испытателей, д 6",
      desc: "Первый день работы – 26 июня 2023",
    },
    {
      dey: "26 июня",
      title: "Ситилинк первым в России запустил продажи смартфона Itel P40",
      desc: "Первый день работы – 26 июня 2023",
    }
  ];

  return (
    <div className="flex tablet:flex-col tablet:gap-5 mt-10">
      <div className="w-[270px]">
      <h2 className="title">Новости</h2>
      <button className="text-[#FE7200] text-[14px] mt-2">Все новости →</button>
      </div>
      <div className="flex justify-between w-full mobile:grid mobile:grid-cols-1 gtgt">
        {data.map((el, i) => {
          return (
            <div key={i} className="w-[240px] mobile:w-full cursor-pointer px-3 flex flex-col items-start ">
              <p className="text-[14px] mb-3">{el.dey}</p>
              <p className="text-start font-[500] text-[18px]">{el.title}</p>
              <p className="text-[#151528] mb-7 mt-3 text-[14px] text-start">
                {el.desc}{" "}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Info;
