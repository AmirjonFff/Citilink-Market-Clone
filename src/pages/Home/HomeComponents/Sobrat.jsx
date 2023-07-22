import React from "react";

function Sobrat() {
  return (
    <div className="flex tablet:flex-wrap gap-2 mt-[30px]">
      <div className="p-[30px] tablet:w-[49.3%] mobile:w-full bg-[#F5F5F6]">
        <h2 className="title">Собрать <br /> компьютер</h2>
      </div>
      <div className="p-[30px] tablet:order-1 bg-[#F5F5F6] w-full">
        <h2 className="title !text-[18px]">Готовые сборки</h2>
        <ul className="flex justify-around font-[500] gap-1 mt-[18px] text-[14px]">
          <li>Игровые</li>
          <li>Для дома</li>
          <li>Для офиса</li>
          <li>Для дизайна</li>
        </ul>
      </div>
      <div className="bg-[#F5F5F6] mobile:w-full tablet:w-[49.3%] p-[30px]">
        <h2 className="title !text-[18px]">Попробуйте!</h2>
        <button className="w-full py-1 px-10 flex mt-2 border-[#FE7200] text-[#FE7200] gap-1 font-[500] rounded-md border-2"><span>Создать</span> <span>свою</span> <span>сборку</span></button>
      </div>
    </div>
  );
}

export default Sobrat;
