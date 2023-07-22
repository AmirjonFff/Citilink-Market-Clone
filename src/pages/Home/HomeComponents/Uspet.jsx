import React from "react";
import Swip from "./Swipers/Swiper2";
import { SwiperSlide } from "swiper/react";

function Uspet() {
  const data = [
    {
      img: "home/uspet/img2.png",
      title: "Ноутбук Huawei MateBook 14S HookeG-W7611T, 14.2, IPS, Intel Core i7 13700H, 14-ядерный,…",
      price: "23 490",
    },
    {
      img: "home/uspet/img1.png",
      title: 'Смартфон INFINIX Hot 30i4/128Gb, X669D, черный',
      price: "23 490",
    },
    {
      img: "home/uspet/img2.png",
      title: "Ноутбук Huawei MateBook 14S HookeG-W7611T, 14.2, IPS, Intel Core i7 13700H, 14-ядерный,…",
      price: "23 490",
    },
    {
      img: "home/uspet/img1.png",
      title: 'Смартфон INFINIX Hot 30i4/128Gb, X669D, черный',
      price: "23 490",
    },
    {
      img: "home/uspet/img2.png",
      title: "Ноутбук Huawei MateBook 14S HookeG-W7611T, 14.2, IPS, Intel Core i7 13700H, 14-ядерный,…",
      price: "23 490",
    },
    {
      img: "home/uspet/img1.png",
      title: 'Смартфон INFINIX Hot 30i4/128Gb, X669D, черный',
      price: "23 490",
    },
  ];

  return (
    <div className="flex mt-10 tablet:flex-col tablet:gap-5">
      <h2 className="title w-[270px]">Успейте купить</h2>
      <Swip>
        {data.map((el, i) => {
          return <SwiperSlide key={i}>
            <div className="w-[240px] hover:shadow-xl px-3 cursor-pointer flex flex-col items-start ">
              <img src={el.img} alt="" />
              <p className="text-[#151528] mb-7 mt-3 text-[15px] text-start">{el.title}</p>
              <p className="font-[500] text-[18px]">{el.price} сомон </p>
            </div>
          </SwiperSlide>;
        })}
      </Swip>
    </div>
  );
}

export default Uspet;
