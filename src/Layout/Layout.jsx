import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
function Layout() {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [vxod, setVxod] = useState(true);
  const [svyz, setSvyz] = useState(true);

  return (
    <div>
      <div className="top container flex items-center text-[14px] justify-between py-[15px]">
        <Link to="/">
          <img src="header/logo.svg" alt="" />
        </Link>
        <p className="flex gap-6 tablet:hidden">
          <span>Мурманск</span>
          <span>+7 (812) 332-84-84</span>
        </p>
        <ul className="flex gap-5 font-[500] text-[18px] mobile:hidden">
          <Link to="skidki">
            <li>Акции</li>
          </Link>
          <Link to="jurnal">
            <li> Магазины</li>
          </Link>
          <li className="cursor-pointer" onClick={() => setModal2(true)}>
            Обратная связь
          </li>
        </ul>
        <button
          onClick={() => setModal2(true)}
          className="text-[#FE7200] hidden mobile:flex border-[#FE7200] border-2 px-5 py-2 rounded-[7px] font-[500]  gap-2"
        >
          <span>Обратная</span> <span>связь</span>
        </button>
      </div>
      <div className="bottom mobile:hidden container bg-white sticky -top-[3px] z-[1000] text-[14px] flex items-end py-[25px] gap-[10%]">
        <button
          onClick={() => setModal2(true)}
          className="text-[#FE7200] border-[#FE7200] border-2 px-5 py-2 rounded-[7px] font-[500] flex gap-2"
        >
          <span>Обратная</span> <span>связь</span>
        </button>
        <form className="w-full tablet:hidden">
          <input
            type="search"
            placeholder="Search . . ."
            className="border-b-2 w-full outline-none px-2 py-1 border-[#DFDFE1]"
          />
        </form>
        <ul className="flex gap-[30px] mobile:hidden font-[500] text-[18px]">
          <li className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>

            <select className="font-[500] text-[16px]">
              <option>TJ</option>
              <option>RU</option>
            </select>
          </li>
          <li
            className="cursor-pointer flex flex-col items-center"
            onClick={() => setModal(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>

            <span>Войти</span>
          </li>
          <Link to="karzina">
            <li className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>

              <span>Корзина</span>
            </li>
          </Link>
        </ul>
      </div>
      <Outlet />
      <footer className="pt-[30px] bg-[#F5F5F6]">
        <div className="container">
          <div className="flex gap-[12%] tablet:flex-col tablet:gap-5 justify-between border-[#B3B3B7] border-b pb-[30px]">
            <h2 className="title !text-[18px]">
              Хочу быть в курсе акций и новинок
            </h2>
            <form className="flex gap-8 tablet:w-full w-[60%]">
              <input
                type="text"
                className="border-2 w-full px-2 border-[#B3B3B7] bg-white rounded-[7px]"
                placeholder="Мой e-mail"
              />
              <button className="border-2 border-[#B3B3B7] px-8 py-2 rounded-[7px] text-[14px]">
                Подписаться
              </button>
            </form>
          </div>
          <div className="flex justify-between border-[#B3B3B7] mobile:flex-col gap-3 border-b py-[30px]">
            <h2 className="title !text-[18px]">
              Включить уведомления в браузере
            </h2>
            <p className="text-[#FE7200] text-[14px]">
              Новости, акции и все самые важные события для вас!
            </p>
            <button className="border-2 border-[#B3B3B7] px-8 py-2 rounded-[7px] text-[14px]">
              Включить
            </button>
          </div>
          <div className="flex border-[#B3B3B7] border-b py-10">
            <ul className="flex flex-col gap-7 text-[14px] w-[40%]">
              <li className="title !text-[28px]">Контакты</li>
              <li className="text-[#2274A5] ">Адреса магазинов</li>
              <li>
                <span>+7 (812) 332-84-84</span> <span>Мурманск</span>
              </li>
              <li>
                <button>Задать вопрос</button>
              </li>
              <li className="flex gap-4">
                <img src="footer/ok.svg" alt="" />
                <img src="footer/telegram.svg" alt="" />
                <img src="footer/tiktok.svg" alt="" />
                <img src="footer/vk.svg" alt="" />
                <img src="footer/youtube.svg" alt="" />
              </li>
            </ul>
            <ul className="text-[14px] font-[500] flex flex-col gap-[13px]">
              <li>Журнал</li>
              <li>Акции</li>
              <li>Покупателям</li>
              <li className="pl-5">Информация</li>
              <li className="pl-5">Доставка</li>
            </ul>
            <div className="flex flex-col gap-4 ml-[20%] py-7">
            <p>© Ситилинк, 2008 – 2023</p>
            <p>Политика обработки персональных данных</p>
          </div>
          </div>
         
        </div>
      </footer>
      {modal && (
        <div className="fixed items-center top-0 left-0 w-full flex justify-center h-screen bgbg z-[1000]">
          <div className="bg-white w-[350px]  p-[50px] ">
            <p className="flex gap-2 text-[24px] justify-center text-gray-600 font-[500]">
              <button onClick={() => setVxod(true)}>Вход</button>
              <span>/</span>
              <button onClick={() => setVxod(false)}>Регистрация</button>
            </p>
            {vxod ? (
              <form className="flex flex-col gap-3">
                <input
                  className="border-b mt-4 border-gray-600 py-1 outline-none bg-transparent"
                  type="email"
                  placeholder="Email или телефон"
                />
                <input
                  className="border-b mt-4 border-gray-600 py-1 outline-none bg-transparent"
                  type="password"
                  placeholder="Пароль"
                />
                <button className="text-red-500">Забыли пароль?</button>
                <input
                  type="text"
                  className="border-b mt-6 border-gray-600 py-1 outline-none bg-transparent"
                  placeholder="Слово с картинки"
                />
                <button
                  className="py-2 rounded-md font-bold mt-4 bg-red-500 text-white"
                  onClick={() => setModal(false)}
                >
                  Войти
                </button>
              </form>
            ) : (
              <form className="flex flex-col gap-3">
                <input
                  className="border-b mt-4 border-gray-600 py-1 outline-none bg-transparent"
                  type="text"
                  placeholder="Ваше имя"
                />
                <input
                  className="border-b mt-4 border-gray-600 py-1 outline-none bg-transparent"
                  type="email"
                  placeholder="Ваше email"
                />
                <input
                  className="border-b mt-4 border-gray-600 py-1 outline-none bg-transparent"
                  type="text"
                  placeholder="Телефон"
                />
                <input
                  className="border-b mt-4 border-gray-600 py-1 outline-none bg-transparent"
                  type="text"
                  placeholder="Придумайте пароль"
                />
                <input
                  type="text"
                  className="border-b mt-6 border-gray-600 py-1 outline-none bg-transparent"
                  placeholder="Слово с картинки"
                />
                <button
                  className="py-2 rounded-md font-bold mt-4 bg-red-500 text-white"
                  onClick={() => setModal(false)}
                >
                  Зарегистрироваться
                </button>
              </form>
            )}
          </div>
        </div>
      )}
      {modal2 && (
        <div className="fixed items-center top-0 left-0 w-full flex justify-center h-screen bgbg z-[1000]">
          <div className="bg-white w-[400px]  p-[50px] ">
            <p className="flex gap-2 text-[24px] justify-center text-gray-600 font-[500]">
              Обратная связь
            </p>
            {svyz ? (
              <form className="flex flex-col gap-3">
                <input
                  className="border-b mt-4 border-gray-600 py-1 outline-none bg-transparent"
                  type="email"
                  placeholder="Тема обращения"
                />
                <label htmlFor="txt">Сообщение до 2000 символов</label>
                <textarea
                  name=""
                  className="h-[100px] rounded border outline-none"
                  id="txt"
                ></textarea>
                <input
                  type="text"
                  className="border-b mt-6 border-gray-600 py-1 outline-none bg-transparent"
                  placeholder="Email для ответа"
                />
                <p className="text-[14px] text-gray-700">
                  Оператор ответит в течение 48 часов
                </p>
                <input
                  type="text"
                  className="border-b mt-8 border-gray-600 py-1 outline-none bg-transparent"
                  placeholder="Номер закз если ест"
                />
                <button
                  className="py-2 rounded-md font-bold mt-6 bg-red-500 text-white"
                  onClick={() => setModal2(false)}
                >
                  Продолжить
                </button>
              </form>
            ) : (
              <form className="flex flex-col gap-3">
                <input
                  className="border-b mt-4 border-gray-600 py-1 outline-none bg-transparent"
                  type="text"
                  placeholder="Ваше имя"
                />
                <input
                  className="border-b mt-4 border-gray-600 py-1 outline-none bg-transparent"
                  type="email"
                  placeholder="Ваше email"
                />
                <input
                  className="border-b mt-4 border-gray-600 py-1 outline-none bg-transparent"
                  type="text"
                  placeholder="Телефон"
                />
                <input
                  className="border-b mt-4 border-gray-600 py-1 outline-none bg-transparent"
                  type="text"
                  placeholder="Придумайте пароль"
                />
                <input
                  type="text"
                  className="border-b mt-6 border-gray-600 py-1 outline-none bg-transparent"
                  placeholder="Слово с картинки"
                />
                <button
                  className="py-2 rounded-md font-bold mt-4 bg-red-500 text-white"
                  onClick={() => setModal(false)}
                >
                  Зарегистрироваться
                </button>
              </form>
            )}
          </div>
        </div>
      )}
      <div className="fixed hidden mobile:block w-full left-0 bottom-0 z-[100] py-4 bg-white">
        <ul className="container font-[600] gap-2  flex justify-evenly">
          <Link to="skidki">
            <li>Акции</li>
          </Link>
          <Link to="jurnal">
            <li> Магазины</li>
          </Link>
          <Link to="karzina">
            <li>Корзина</li>
          </Link>
          <li className="cursor-pointer" onClick={() => setModal(true)}>
            Войти
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Layout;
