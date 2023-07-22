import React, { useState } from "react";
import { Link } from "react-router-dom";

function Kategor() {
  const [obj, setObj] = useState(null);
  const [modal, setModal] = useState(false);


  const data = [
    {
      title:
        'Ноутбук Huawei MateBook D 15 BoM-WFP9, 15.6", IPS, AMD Ryzen 7 5700U, 8-ядерный, 16ГБ DDR4, 512ГБ SSD, AMD Radeon , серебристый',
      img: "kategor/img.png",
      uslug: {
        Экран: `15.6"; 1920х1080; IPS;`,
        Процессор: `AMD Ryzen 7 5700U 1.8 ГГц (4.3 ГГц, в режиме Turbo)`,
        "Графический процессор": `AMD Radeon ;`,
        "Оперативная память": `16 ГБ, DDR4;`,
        Клавиатура: "с русскими буквами",
      },
      price: "57 990",
    },
    {
      title:
        'Ноутбук  HP MakeBook D 15 BoM-WFP9, 15.6", IPS, AMD Ryzen 7 5700U, 8-ядерный, 16ГБ DDR4, 512ГБ SSD, AMD Radeon , серебристый',
      img: "kategor/img.png",
      uslug: {
        Экран: `15.6"; 1920х1080; IPS;`,
        Процессор: `AMD Ryzen 7 5700U 1.8 ГГц (4.3 ГГц, в режиме Turbo)`,
        "Графический процессор": `AMD Radeon ;`,
        "Оперативная память": `16 ГБ, DDR4;`,
        Клавиатура: "с русскими буквами",
      },
      price: "57 990",
    },
    {
      title:
        'Ноутбук HP MakeBook D 15 BoM-WFP9, 15.6", IPS, AMD Ryzen 7 5700U, 8-ядерный, 16ГБ DDR4, 512ГБ SSD, AMD Radeon , серебристый',
      img: "kategor/img.png",
      uslug: {
        Экран: `15.6"; 1920х1080; IPS;`,
        Процессор: `AMD Ryzen 7 5700U 1.8 ГГц (4.3 ГГц, в режиме Turbo)`,
        "Графический процессор": `AMD Radeon ;`,
        "Оперативная память": `16 ГБ, DDR4;`,
        Клавиатура: "с русскими буквами",
      },
      price: "57 990",
    },
    {
      title:
        'Ноутбук Huawei MateBook D 15 BoM-WFP9, 15.6", IPS, AMD Ryzen 7 5700U, 8-ядерный, 16ГБ DDR4, 512ГБ SSD, AMD Radeon , серебристый',
      img: "kategor/img.png",
      uslug: {
        Экран: `15.6"; 1920х1080; IPS;`,
        Процессор: `AMD Ryzen 7 5700U 1.8 ГГц (4.3 ГГц, в режиме Turbo)`,
        "Графический процессор": `AMD Radeon ;`,
        "Оперативная память": `16 ГБ, DDR4;`,
        Клавиатура: "с русскими буквами",
      },
      price: "57 990",
    },
    {
      title:
        'Ноутбук Huawei MateBook D 15 BoM-WFP9, 15.6", IPS, AMD Ryzen 7 5700U, 8-ядерный, 16ГБ DDR4, 512ГБ SSD, AMD Radeon , серебристый',
      img: "kategor/img.png",
      uslug: {
        Экран: `15.6"; 1920х1080; IPS;`,
        Процессор: `AMD Ryzen 7 5700U 1.8 ГГц (4.3 ГГц, в режиме Turbo)`,
        "Графический процессор": `AMD Radeon ;`,
        "Оперативная память": `16 ГБ, DDR4;`,
        Клавиатура: "с русскими буквами",
      },
      price: "57 990",
    },
  ];
  return (
    <div className="container">
      <div>
        <h2 className="title text-[26px] font-bold ">
          Ноутбуки{" "}
          <span className="text-[#B3B3B7] font-[400]">1025 товаров</span>
        </h2>
        <ul className="flex gap-[14px] text-[15px] font-[500] mt-7">
          <li>по популярности</li>
          <li>по цене</li>
          <li>по рейтингу</li>
          <li>по названию</li>
          <li>по обзорам</li>
        </ul>
      </div>
      <div className="flex mobile:flex-col">
        <div>
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="flex justify-between tablet:flex-col p-7 border-b border-gray-500"
              >
                <div className="w-[77%] flex items-center gap-14 full:flex-col">
                  <img
                    src={item.img}
                    className="w-[520px] full:w-[65%]"
                    alt=""
                  />
                  <div className="text-[14px]">
                    <h3 className="title !text-[22px] font-[500] border-b border-gray-500 pb-2">
                      {item.title}
                    </h3>
                    <ul className="flex flex-col gap-2 mt-4">
                      {Object.keys(item.uslug).map((key, index) => {
                        return (
                          <li key={index}>
                            <span className="font-[500] text-[#5D5D64]">
                              {key}
                            </span>
                            : {item.uslug[key]}
                          </li>
                        );
                      })}
                    </ul>
                    <p className="mt-10">
                      В наличии в 1 магазине Привезём в 3 пункта (1-2 дня)
                    </p>
                  </div>
                </div>
                <div className="flex justify-end items-end flex-col">
                  <h3 className="title font-bold text-[28px] mb-6">
                    {item.price} ₽
                  </h3>

                  <button
                    onClick={() => {
                      setModal(true);
                      setObj(item);
                    }}
                    className="bg-[#FE7200] text-white rounded-[6px] px-[30px] py-2"
                  >
                    
                    В корзину
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <div className="w-[265px] tablet:w-[220px] mobile:w-full p-8 bg-[#F5F5F6] h-[600px]">
            <div className="flex justify-between">
              <h3 className="text-[22px]">Фильтр</h3>
              <button className="text-[11px]">Очистить</button>
            </div>
            <input
              type="text"
              placeholder="Поиск по фильтрам"
              className="bg-white w-full text-[14px] px-2 py-1"
            />
            <h2 className="font-bold my-2">Цена, ₽</h2>
            <p className="flex gap-3">
              <input
                type="text"
                className="bg-white w-[30%] px-2 py-1"
                name=""
                id=""
              />
              <span>-</span>
              <input
                type="text"
                className="bg-white w-[30%] px-2 py-1"
                name=""
                id=""
              />
            </p>
            <div>
              <h1 className="font-bold my-2">Статус товара</h1>
              <input type="checkbox" id="tovar" />
              <label
                className="ml-2 text-[#5D5D64] text-[14px]"
                htmlFor="tovar"
              >
                Скидки на товары
              </label>{" "}
              <br />
              <input type="checkbox" id="uslug" />
              <label
                className="ml-2 text-[#5D5D64] text-[14px]"
                htmlFor="uslug"
              >
                Скидки на услугу
              </label>{" "}
              <br />
              <h3 className="title !text-[14px]">Услуги</h3>
              <input type="checkbox" id="comp" />
              <label className="ml-2 text-[#5D5D64] text-[14px]" htmlFor="comp">
                Скидки на комплект
              </label>{" "}
              <br />
              <h2 className="font-bold my-2">Товары со скидкой</h2>
              <input type="radio" id="uslug" />
              <label
                className="ml-2 text-[#5D5D64] text-[14px]"
                htmlFor="uslug"
              >
                Скидки на услугу
              </label>{" "}
              <br />
              <input type="radio" id="comp" />
              <label className="ml-2 text-[#5D5D64] text-[14px]" htmlFor="comp">
                Скидки на комплект
              </label>{" "}
              <br />
              <input type="checkbox" id="bonus" />
              <label
                className="ml-2 text-[#5D5D64] text-[14px]"
                htmlFor="bonus"
              >
                Бонусы
              </label>{" "}
              <br />
              <input type="checkbox" id="rasch" />
              <label
                className="ml-2 text-[#5D5D64] text-[14px]"
                htmlFor="rasch"
              >
                Рассрочка
              </label>{" "}
              <br />
              <input type="checkbox" id="else" />
              <label className="ml-2 text-[#5D5D64] text-[14px]" htmlFor="else">
                Другое
              </label>{" "}
              <br />
            </div>
          </div>
        </div>
      </div>
      {modal && (
        <div className="flex fixed top-0 left-0 w-full z-[1000] h-screen justify-center items-center bgbg">
          <div className="bg-white w-[70%] p-[60px]">
            <div className="flex justify-between mb-7">
              <h2 className="text-[30px] font-bold">
                Товар добавлен в корзину
              </h2>
              <p className="flex gap-2">
                <Link to={"/kategor"}>
                  <button
                    onClick={() => setModal(false)}
                    className="py-[6px] px-[20px] font-[500] rounded-[7px] border-[1.5px] border-gray-600"
                  >
                    Продолжить покупки
                  </button>
                </Link>
                <Link to={"/karzina"}>
                  <button className="py-[6px] px-[20px] font-[500] rounded-[7px] border-[1.5px] border-red-400 bg-red-400 text-white ">
                    Перейти в корзину
                  </button>
                </Link>
              </p>
            </div>
            <div className="flex gap-5 pb-7 border-b border-gray-500">
              <img src={obj.img} className="h-[100px]" alt="" />
              <p className="w-[60%] font-[500] text-[18px]">
                <h2>{obj.title}</h2>
                <p className="flex flex-wrap gap-1">
                  {Object.values(obj.uslug).map((el) => {
                    return <span>{el}</span>;
                  })}
                </p>
              </p>
              <p className="flex gap-2 text-[20px] items-start text-gray-700">
                <span>-</span>
                <span className="border-b border-gray-500">1</span>
                <span>+</span>
              </p>
              <p className="font-bold ml-5 text-[22px]">{obj.price} ₽</p>
            </div>
            <div>
              <p className="mt-7 font-[500] text-[21px]">
                Дополнительные услуги и сопутствующие товары
              </p>
              <div className="flex justify-between">
                <div>
                  <input type="checkbox" id="tovar" />
                  <label className="ml-2 text-[14px] mt-3" htmlFor="tovar">
                    Страховой полис "Защита покупки"
                  </label>{" "}
                  <br />
                  <input type="checkbox" id="uslug" />
                  <label className="ml-2 text-[14px] mt-3" htmlFor="uslug">
                    Полис "Продленная гарантия"
                  </label>{" "}
                  <br />
                  <input type="checkbox" id="comp" />
                  <label className="ml-2 text-[14px] mt-3" htmlFor="comp">
                    КОМБО "Страховка 1 год+
                  </label>{" "}
                </div>
                <div className="flex flex-col gap-4">
                  <p>
                    <button className="border border-gray-500 px-2 rounded-l-md">
                      +1год
                    </button>
                    <button className="border border-gray-500 px-2 rounded-r-md">
                      +2год
                    </button>
                    <span className="ml-10 font-bold">{obj.price} ₽</span>
                  </p>
                  <p>
                    <button className="border border-gray-500 px-2 rounded-l-md">
                      +1год
                    </button>
                    <button className="border border-gray-500 px-2">
                      +2год
                    </button>
                    <button className="border border-gray-500 px-2 rounded-r-md">
                      +2год
                    </button>
                    <span className="ml-10 font-bold">{obj.price} ₽</span>
                  </p>
                  <p>
                    <button className="border border-gray-500 px-2 rounded-l-md">
                      +1год
                    </button>
                    <button className="border border-gray-500 px-2">
                      +2год
                    </button>
                    <button className="border border-gray-500 px-2 rounded-r-md">
                      +2год
                    </button>
                    <span className="ml-10 font-bold">{obj.price} ₽</span>
                  </p>
                  <p>
                    <button className="border border-gray-500 px-2 rounded-l-md">
                      +1год
                    </button>
                    <button className="border border-gray-500 px-2">
                      +2год
                    </button>
                    <button className="border border-gray-500 px-2 rounded-r-md">
                      +2год
                    </button>
                    <span className="ml-10 font-bold">{obj.price} ₽</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Kategor;
