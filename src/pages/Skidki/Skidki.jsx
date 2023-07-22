import React from "react";

function Skidki() {
  const data = [
    {
      img: "scidki/link.png",
      title: "ЖАРА в Ситилинк!",
      desk: "Распродажа до 45%",
    },
    {
      img: "scidki/link.png",
      title: "Честная рассрочка",
      desk: "Распродажа до 45%",
    },
    {
      img: "scidki/kot.png",
      title: "Ночная распродажа уже сегодня!",
      desk: "Распродажа до 80%",
    },
    {
      img: "scidki/kot.png",
      title: "Наслаждайся игрой!",
      desk: "Распродажа до 80%",
    },
    {
      img: "scidki/nauw.png",
      title: "Cкидки на умные устройства от Яндекс",
      desk: "Скидки до 1000 рублей на устройства    умного дома от Яндекс.",
    },
    {
      img: "scidki/nauw.png",
      title: "До 1500 бонусов за отзыв на телевизоры от Haier",
      desk: "Распродажа до 80%",
    },
    {
      img: "scidki/nauw.png",
      title: "Cкидки на умные устройства от Яндекс",
      desk: "Скидки до 1000 рублей на устройства    умного дома от Яндекс.",
    },
    {
      img: "scidki/nauw.png",
      title: "До 1500 бонусов за отзыв на телевизоры от Haier",
      desk: "Скидки до 1000 рублей на устройства    умного дома от Яндекс.",
    },
    {
      img: "scidki/nauw.png",
      title: "До 1500 бонусов за отзыв на телевизоры от Haier",
      desk: "Скидки до 1000 рублей на устройства    умного дома от Яндекс.",
    },
    {
      img: "scidki/nauw.png",
      title: "Cкидки на умные устройства от Яндекс",
      desk: "Распродажа до 80%",
    },
    {
      img: "scidki/nauw.png",
      title: "До 1500 бонусов за отзыв на телевизоры от Haier",
      desk: "Скидки до 1000 рублей на устройства    умного дома от Яндекс.",
    },
    {
      img: "scidki/nauw.png",
      title: "Cкидки на умные устройства от Яндекс",
      desk: "Распродажа до 80%",
    },
  ];

  return (
    <div className="container pb-[100px]">
        <h1 className="title my-4">
        Акции
        </h1>
      <div className="flex gap-3 mobile:flex-col">
      <div className="grid gap-x-[10px] gap-y-11 grid-cols-4 tablet:grid-cols-3 mobile:grid-cols-2 w-full">
        {data.map((el, i) => {
          return (
            <div key={i}>
              <img src={el.img} className="w-full" alt="" />
              <h2 className="title !text-[22px] !tablet:text-[18px] mt-11 mb-3">{el.title}</h2>
              <p className="text-[#5D5D64] text-[14px">{el.desk}</p>
            </div>
          );
        })}
      </div>
      <div className="w-[265px] p-8 bg-[#F5F5F6] h-[300px]">
        <div className="flex justify-between">
          <h3 className="text-[22px]">Фильтр</h3>
          <button className="text-[11px]">Очистить</button>
        </div>
        <h2 className="title !text-[14px]">Акции</h2>
        <div>
          <input type="checkbox" id="tovar" />
          <label className="ml-2 text-[#5D5D64] text-[14px]" htmlFor="tovar">
            Скидки на товары
          </label>{" "}
          <br />
          <input type="checkbox" id="uslug" />
          <label className="ml-2 text-[#5D5D64] text-[14px]" htmlFor="uslug">
            Скидки на услугу
          </label>{" "}
          <br />
          <input type="checkbox" id="comp" />
          <label className="ml-2 text-[#5D5D64] text-[14px]" htmlFor="comp">
            Скидки на комплект
          </label>{" "}
          <br />
          <input type="checkbox" id="bonus" />
          <label className="ml-2 text-[#5D5D64] text-[14px]" htmlFor="bonus">
            Бонусы
          </label>{" "}
          <br />
          <input type="checkbox" id="rasch" />
          <label className="ml-2 text-[#5D5D64] text-[14px]" htmlFor="rasch">
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
  );
}

export default Skidki;
