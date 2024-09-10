import React from 'react';
import { Link } from 'react-router-dom';
import MaxWidth from '../components/MaxWidth';

const Auth = () => {
  return (
    <div className="pt-20 text-white flex justify-center items-center">
      <MaxWidth className="text-center flex flex-col justify-center mx-auto">
        <div className="text-center flex flex-col space-y-10 justify-center items-center w-full">
          <div className="space-y-3">
            <h1 className="md:text-[63px] text-4xl font-extrabold text-[#5CFFF5]">
              РЕГИСТРАЦИЯ
            </h1>
            <p className="md:text-2xl sm:text-xl pt-3 text-base font-normal">
              Большой выбор различных игр, воспользуйтесь <br /> поиском для быстрого
              доступа к разделу.
            </p>
          </div>

          <div className="border-2 max-w-[512px] w-full box-sh mt-10 backround-color border-[#5DFFF5] rounded-3xl p-5 text-center">
            <div className="space-y-5 md:p-5 p-2">
              <Link
                to="#"
                className="flex mb-5 items-center justify-center gap-x-2"
              >
                <img width={57} height={51} src="Vector.png" alt="" />
                <img width={116} height={28} src="TRY2WIN.png" alt="" />
              </Link>
              <input
                type="text"
                placeholder="Введите логин"
                className="w-full py-2 px-4 outline-none text-center shadow-2xl font-medium text-base placeholder:font-medium placeholder:text-base placeholder:text-white bg-[#17302E] border-[#3C7D77] border-2 box-sh rounded-lg"
              />
              <input
                type="text"
                placeholder="Введите почту"
                className="w-full py-2 px-4 outline-none text-center shadow-2xl font-medium text-base placeholder:font-medium placeholder:text-base placeholder:text-white bg-[#17302E] border-[#3C7D77] border-2 box-sh rounded-lg"
              />
              <input
                type="text"
                placeholder="Введите пароль"
                className="w-full py-2 px-4 outline-none text-center shadow-2xl font-medium text-base placeholder:font-medium placeholder:text-base placeholder:text-white bg-[#17302E] border-[#3C7D77] border-2 box-sh rounded-lg"
              />
              <input
                type="text"
                placeholder="Введите пароль повторно"
                className="w-full py-2 px-4 outline-none text-center shadow-2xl font-medium text-base placeholder:font-medium placeholder:text-base placeholder:text-white bg-[#17302E] border-[#3C7D77] border-2 box-sh rounded-lg"
              />
              <div className="flex gap-x-5 items-center">
                <input type="checkbox" width={30} height={30} />
                <p className="font-semibold text-base">Запомнить</p>
              </div>
              <div className="flex items-center gap-4">
                <button className="w-full font-semibold bg-[#4C6FB4] text-base rounded-lg px-5 py-2">
                  Регистрация
                </button>
                <button className="w-full font-semibold bg-[#4CB4AD] text-base rounded-lg px-3 py-2">
                  Войти
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-10 leading-tight space-y-10 text-white">
          <div className="space-y-3 ">
            <p className="md:text-[63px] leading-10 sm:text-4xl text-xl font-extrabold ">
              ВЫ УСПЕШНО{' '} <br /> <br className='sm:flex hidden' />
              <span className="text-[#5CFFF5]">ЗАРЕГИСТРИРОВАЛИСЬ</span>
            </p>

            <p className="sm:text-[24px] pt-4 text-xl font-normal">
              Ожидайте потверждение вашей регистрации
            </p>
          </div>
        </div>
      </MaxWidth>
    </div>
  );
};

export default Auth;
