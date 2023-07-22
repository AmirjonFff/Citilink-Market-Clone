import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

import { Pagination } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../reducers/basket";
import { useNavigate } from "react-router-dom";

function PerKarzinka() {
  const perBasket = useSelector(({ basket }) => basket.perBasket);
  const dispatch = useDispatch()

  const navigate = useNavigate();

  return (
    <div className="container pb-10">
      <div className="title font-[500] text-[26px]">{perBasket?.name}</div>
      <div className="flex justify-between items-start">
        <div className="w-[28%] h-[400px]">
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            {perBasket?.media.map((el, i) => {
              return <SwiperSlide key={i}>
                <img
                  className="!object-contain"
                  src={`http://localhost:3000/${el.src}`}
                  alt=""
                />
              </SwiperSlide>;
            })}
          </Swiper>
        </div>
        <div className="w-[31%]">
          <ul className="flex flex-col gap-2 text-gray-700 font-[500]">
            {
              perBasket?.properties[0]?.properties?.map(el => {
                console.log(el);
                return <li> {el.key}:{el.value} </li>
              })
            }
          </ul>
          <button className="text-red-400 font-bold my-5">
            Все характеристики
          </button>
          <p className="border-b-2"></p>
          <button className="text-red-400 font-bold my-5">Все услуги</button>
          <div className="bg-gray-200 rounded-md p-5 flex justify-between">
            <p>
              <p className="text-[19px] font-[500]">
                Появились вопросы <br /> о товаре?
              </p>
              <button className="p-2 border-2 border-gray-400 text-gray-700 rounded mt-3 bg-white">
                Консультация специалиста
              </button>
            </p>
            <img
              src="https://rstatic.citilink.ru/react-ssr-app-catalog/ce9d8957/_next/static/images/04269ecb34ec451ef0f2d7afd8b66825.png"
              alt="img"
            />
          </div>
        </div>
        <div className="w-[31%]">
          <p className="text-[36px] mb-5 font-bold">
            {perBasket?.price} <span className="text-gray-400">сомон</span>
          </p>
          <button onClick={() => {
            dispatch(addProduct(perBasket));
            navigate("/")
          }} className="w-full py-2 bg-red-400 text-white rounded-md font-[500]">
            В корзину
          </button>
          <p className="flex mt-3">
            <button className="bg-gray-100 text-gray-700 w-[50%] border-r-2 py-2 rounded-l-md">
              В избранное
            </button>
            <button className="bg-gray-100 text-gray-700 w-[50%] py-2 rounded-r-md">
              В сравнение
            </button>
          </p>
          <p className="text-gray-600 font-[500] text-[18px] mt-4">
            <span className="text-black font-bold">+24</span> бонуса за покупку{" "}
            <br />
            От 221₽ в месяц
          </p>
        </div>
      </div>
      <div className="mt-5">
        <div className="title border-b-2 pb-2 mb-3">
          <ul className="flex">
            <li>Описание</li>
          </ul>
        </div>
        <p>
          {/* {
            perBasket?.description
          } */}
          Гарнитура {
            perBasket?.name
          } – одна из самых удобных, благодаря форме
          вкладышей, которые максимально повторяют геометрию ушной раковины.
          Модель подходит даже для активного времяпрепровождения и длительного
          использования. Наушники совместимы с любым устройством, оснащенным
          разъемом Lightning в том числе iPhone, iPod touch и iPad. Кабель имеет
          пульт, который управляет уровнем громкости и функцией начала и
          завершения звонков, а также воспроизведением звука и видео. Гарнитура
          APPLE EarPods отличается ярким насыщенным звуком при минимальных
          потерях, что обеспечивается уникальной формой корпуса и динамиков.
          Модель лаконичного дизайна не привлекает лишнего внимания и гармонично
          дополнит любой образ современного пользователя.
        </p>
      </div>
    </div>
  );
}

export default PerKarzinka;
