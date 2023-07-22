import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Karzina() {
  const products = useSelector(({ basket }) => basket.products);
  console.log(products);
  return (
    <div className="container">
      {!products.length ? (
        <div>
          <div>
            <Link to={"/kategor"}>
              <p>Вернуться к покупкам</p>
            </Link>
            <h2 className="font-bold text-[30px]">Корзина</h2>
          </div>
          <div className="flex justify-center items-center gap-4 h-[40vh] flex-col">
            <p className="text-[22px] font-[500]">В корзине нет товаров</p>
            <p>
              Найдите то, что вам нужно в каталоге или при помощи{" "}
              <span className="text-blue-600">поиска</span>{" "}
            </p>
            <Link to={"/kategor"}>
              <button className="border-2 border-gray-500 rounded-md py-2 px-[23px] font-[500] ">
                Вернуться к покупкам
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          {
            products?.length && products.map(el => {
              return <span>{el.product.name}</span>
            })
          }
        </div>
      )}
    </div>
  );
}

export default Karzina;
