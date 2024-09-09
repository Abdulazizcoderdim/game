import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MaxWidth from '../components/MaxWidth';
import ScrollableImageGallery from '../components/ScrollableImageGallery ';
import { functionChit, settingsInfo, zakazData } from '../constants';

const Battlefield = () => {
  const [active, setActive] = useState('AIM-BOT');
  const [zakaz, setZakaz] = useState(0);
  return (
    <div>
      <MaxWidth>
        {/* 1 chisi */}
        <div className="w-full text-white space-y-3 pt-24">
          <p className="font-extrabold md:text-[63px] text-5xl">
            BATTLEFIELD 4 <span className="text-[#61FFF5]">PROPHET</span>
          </p>
          <p className="text-[19px] font-semibold">
            ИГРА:{' '}
            <span className="text-[#61FFF5]">
              CALL OF DUTY MODERN WARFARE 3
            </span>
          </p>
        </div>
        {/* 2 chisi */}
        <div className="flex gap-10 mt-7">
          <div
            style={{
              background:
                'linear-gradient(150.74deg, #17302E 8.29%, #48968F 189.21%)',
            }}
            className="border-2 border-[#5DFEF4] rounded-2xl shadow-xl p-5 w-full max-w-[840px]"
          >
            <div className="py-6 px-5 space-y-5 text-white border-[#5DFEF4] border-dashed border-2 w-full h-full border-b-0 rounded-2xl rounded-b-none">
              {/* 1 */}
              <div className="flex items-center justify-between">
                <h1 className="text-[28px] pl-5 font-extrabold">
                  PROPHET <span className="text-[#61FFF6]">CHEAT</span>
                </h1>
                <div className="flex items-center gap-x-3">
                  <button className="rounded-md text-shadow-custom px-3 py-1 border-2 border-[#18FB8E] text-[#18FB8E] drop-shadow-md">
                    UNDETECTED
                  </button>
                  <button className="rounded-md text-shadow-custom2 px-3 py-1 border-2 border-[#17F1FF] text-[#17F1FF] drop-shadow-md">
                    UNDETECTED
                  </button>
                </div>
              </div>

              {/* 2 */}
              <ScrollableImageGallery />

              {/* 3 */}
              <div className="space-y-5">
                <h1 className="font-extrabold text-[23px]">
                  ФУНКЦИИ <span className="text-[#5DF6EC]">ЧИТА</span>
                </h1>
                <div className="flex items-center gap-2 flex-wrap">
                  {functionChit.map((item, i) => {
                    const isActive = active === item.name;
                    return (
                      <button
                        onClick={() => setActive(item.name)}
                        key={i}
                        className={`${
                          isActive
                            ? 'border-2 border-[#36FFF3] rounded-lg bg-[#05413D] py-1 px-4 shadow-[0_0_4px_1px_rgba(0,255,255,0.6)]'
                            : 'px-5 py-2 border-2 text-sm font-bold border-[#2C7B73] text-[#2C7B73] bg-[#0B1F1D] rounded-md'
                        } `}
                      >
                        {item.name}
                      </button>
                    );
                  })}
                </div>

                <div className="border-2 text-white bg-[#17302E] shadow-2xl border-[#36FFF3] rounded-lg p-5">
                  <div className="space-y-4">
                    <h1 className="text-[21px] font-bold">
                      ФУНКЦИЯ: <span className="text-[#5DF6EC]">{active}</span>
                    </h1>
                    <ul className="space-y-3">
                      <li className="text-lg flex items-center gap-x-2 font-semibold">
                        <img width={18} height={18} src="re.png" alt="" />
                        Aim Enable
                      </li>
                      <li className="text-lg flex items-center gap-x-2 font-semibold">
                        <img width={18} height={18} src="re.png" alt="" />
                        Bone Selector (Head/Neck/Chest/Arms/Legs)
                      </li>
                      <li className="text-lg flex items-center gap-x-2 font-semibold">
                        <img width={18} height={18} src="re.png" alt="" />
                        Silent Aim
                      </li>
                      <li className="text-lg flex items-center gap-x-2 font-semibold">
                        <img width={18} height={18} src="re.png" alt="" />
                        Auto Fire
                      </li>
                    </ul>
                  </div>
                </div>
                <h1 className="font-extrabold text-[23px]">
                  ОПИСАНИЕ <span className="text-[#5DF6EC]">ЧИТА</span>
                </h1>
                <div className="border-2 text-white bg-[#17302E] shadow-2xl border-[#36FFF3] rounded-lg p-5">
                  <div className="space-y-4">
                    <p className="text-[15px] font-medium">
                      Чит Ring-1 на игру Destiny 2, зарекомендовал себя
                      наилучшим образом среди игроков, чит имеет хорошею
                      оптимизацию, красивый визуальный вид и имеет обширный
                      функционал из которого можно выделать следующее функции:
                    </p>
                  </div>
                </div>
                <h1 className="font-extrabold text-[23px]">
                  ОБЯЗАТЕЛЬНО ДЛЯ
                  <span className="text-[#5DF6EC]">ЧИТА</span>
                </h1>
                <div className="border-2 text-white bg-[#17302E] shadow-2xl border-[#36FFF3] rounded-lg p-5">
                  <div className="flex items-center gap-x-2">
                    <img src="usb.png" alt="" />
                    <p className="font-bold text-[19px]">
                      Для работы чита, вам понадобиться флешка
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-10 w-full max-w-[450px]">
            {/* 1 */}
            <div
              style={{
                background:
                  'linear-gradient(150.74deg, #17302E 8.29%, #48968F 189.21%)',
              }}
              className="border-2 border-[#5DFEF4] rounded-2xl shadow-xl p-5 w-full h-full"
            >
              <div className="py-6 px-5 space-y-5 text-white border-[#5DFEF4] border-dashed border-2 w-full h-full border-b-0 rounded-2xl rounded-b-none">
                <div className="text-white space-y-5">
                  <h1 className="text-[23px] font-extrabold">
                    ОФОРМЛЕНИЕ <span className="text-[#61FFF5]">ЗАКАЗА</span>
                  </h1>
                  <p className="text-[14px] font-normal">
                    Выберите удобный тарифный план для покупки продукта
                  </p>

                  <div className="pt-5 space-y-7">
                    {zakazData.map((item, i) => {
                      const isActive = i === zakaz;
                      return (
                        <div
                          onClick={() => setZakaz(i)}
                          key={i}
                          className={`flex ${
                            isActive
                              ? 'bg-[#448D86] border-[#61FFF5]'
                              : 'border-[#2C7B73] bg-[#0B1F1D] text-[#2C7B73]'
                          }  border-2  rounded-lg cursor-pointer justify-between items-center px-5 py-3 `}
                        >
                          <p className="flex font-semibold text-[15px] items-center gap-x-2">
                            <div
                              className={`w-[22px] h-[22px] flex items-center justify-center rounded-full border-2 ${
                                isActive ? 'border-white' : 'border-[#2C7B73]'
                              } `}
                            >
                              <div
                                className={`w-[15px] h-[13.5px] ${
                                  isActive ? 'bg-white' : ''
                                } rounded-full`}
                              />
                            </div>
                            {item.day} день
                          </p>
                          <p className="text-[19px] font-bold text-white">
                            {item.money}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex justify-between items-center">
                    <h1 className="font-bold text-4xl">2200₽</h1>
                    <button className="font-semibold text-base rounded-lg bg-[#4CB4AD] px-6 py-2">
                      Перейти к оплате
                    </button>
                  </div>

                  <div className="flex items-center gap-x-3">
                    <input type="checkbox" />
                    <p className="font-light text-sm">
                      Я согласен c{' '}
                      <Link to={'#'} className="underline">
                        пользовательским r=
                        <br /> соглашением
                      </Link>
                    </p>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-x-4">
                      <img src="mw.png" width={31} height={31} alt="" />
                      <p className="text-sm font-light">
                        Есть вопросили <br /> проблема?
                      </p>
                    </div>

                    <button className="font-semibold text-base rounded-lg bg-[#4CB4AD] px-6 py-2">
                      Поддержка
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div
              style={{
                background:
                  'linear-gradient(150.74deg, #17302E 8.29%, #48968F 189.21%)',
              }}
              className="border-2 border-[#5DFEF4] rounded-2xl shadow-xl p-5 w-full"
            >
              <div className="py-6 px-5 space-y-5 text-white border-[#5DFEF4] border-dashed border-2 w-full h-full border-b-0 rounded-2xl rounded-b-none">
                <div className="space-y-5">
                  {settingsInfo.map(item => (
                    <div key={item.name} className="flex items-center gap-x-4">
                      <img width={43} height={43} src={item.icon} alt="" />
                      <div className="">
                        <p className="font-medium  text-lg leading-5 text-white/45">
                          {item.title}
                        </p>
                        <p className="font-bold text-lg">{item.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 3 chisi */}
        <div className="text-white mt-20">
          <div className="space-y-4">
            <h1 className="font-extrabold text-[43px]">
              <span className="text-[#5DFFF5]">РЕКОМЕНДАЦИЯ</span> ОТ НАС
            </h1>
            <p className="text-[23px] font-normal">
              Более 500 читов на различные игры и мы подобрали для <br /> вас
              самые популярные игры
            </p>
          </div>

          <div className="mt-14">
            <div className="grid grid-cols-4 gap-x-10 gap-y-5"></div>
          </div>
        </div>
      </MaxWidth>
    </div>
  );
};

export default Battlefield;
