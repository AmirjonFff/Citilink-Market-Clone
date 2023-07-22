import React from "react";

function Jurnal() {
  const data = [
    {
      title: "Пункт выдачи Ситилинк Орск, пр-кт Ленина",
      desk: "Оренбургская область, Орск, пр-кт Ленина, 90, пр-кт Ленина, 90. 1 этаж",
      time: "Пункт выдачи заказов работает ежедневно С 10:00 до 19:00, перерыв с 14:00 до 15:00",
      tel: "+73532606066#28265",
    },
    {
      title: `Магази Оренбург, ТЦ "Европа - Азия"`,
      desk: "Оренбургская область, Оренбург, ул Чкалова, 35/1, ТЦ Европа - Азия",
      time: "с 10:00 до 22:00",
      tel: "+73532606066#28265",
    },
    {
      title: "Пункт выдачи Ситилинк Орск, пр-кт Ленина",
      desk: "Оренбургская область, Орск, пр-кт Ленина, 90, пр-кт Ленина, 90. 1 этаж",
      time: "Пункт выдачи заказов работает ежедневно С 10:00 до 19:00, перерыв с 14:00 до 15:00",
      tel: "+73532606066#28265",
    },
    {
      title: `Магази Оренбург, ТЦ "Европа - Азия"`,
      desk: "Оренбургская область, Оренбург, ул Чкалова, 35/1, ТЦ Европа - Азия",
      time: "с 10:00 до 22:00",
      tel: "+73532606066#28265",
    },
  ];

  return (
    <div className="container">
      <div className="flex justify-between w-[81%] mb-7">
        <h2 className="title">Адреса магазинов и пунктов выдачи</h2>
        <button className="text-red-500">Все магазины России</button>
      </div>
      <div className="flex mobile:flex-col gap-4">
        <p className="flex ">
          <button className="py-2 px-[40px] border-gray-600 border-2 rounded-[7px] text-gray-500 text-[14px] font-bold">
            Списком
          </button>
          <button className="py-2 px-[40px] border-gray-600 border-2 rounded-[7px] text-gray-500 text-[14px] font-bold">
            На карте
          </button>
        </p>
        <form className=" w-[60%] mobile:w-full">
          <input
            type="search"
            placeholder="Поиск по магазинам"
            className="w-full border-b-2 px-2 py-1 border-gray-500"
            name=""
            id=""
          />
        </form>
      </div>
      <div className="py-10 flex gap-[50px] mobile:flex-col">
        <div className="flex flex-col gap-[50px]">
          {data.map((item, index) => {
            return (
              <div key={index} className="flex tablet:flex-wrap gap-4 justify-between">
                <div className="w-[55%] tablet:w-full">
                  <h3 className="!text-[24px] font-[500]">{item.title}</h3>
                  <p className="text-[20px] text-gray-600">{item.desk}</p>
                </div>
                <div className="w-[38%] tablet:w-full text-gray-400">
                  <p>{item.time}</p>
                  <p className="mt-5">{item.tel}</p>
                </div>
              </div>
            );
          })}
        </div>
       <div>
       <div className="w-[265px] tablet:w-[220px] p-8 bg-[#F5F5F6] h-[300px]">
          <div className="flex justify-between">
            <h3 className="text-[22px]">Фильтр</h3>
            <button className="text-[11px]">Очистить</button>
          </div>
          <h2 className="title !text-[14px]">Тип</h2>
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
            <h3 className="title !text-[14px]">Услуги</h3>
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
       <div className="p-[30px] bg-red-100 w-[265px] tablet:w-[220px] mt-5">Обращаем ваше внимание: товар в Ситилинк-мини хранится 72 часа, по истечении времени заказ расформировывается и отправляется на склад центрального магазина.</div>
       </div>
      </div>
    </div>
  );
}

export default Jurnal;
