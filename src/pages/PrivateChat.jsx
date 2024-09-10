import { Search } from 'lucide-react';
import React, { useState } from 'react';
import GameCard from '../components/GameCard';
import GameCard2 from '../components/GameCard2';
import GameCard3 from '../components/GameCard3';
import MaxWidth from '../components/MaxWidth';

const data = ['POPULAR', 'TOP', 'NEW', 'RATE', 'LATER'];

const PrivateChat = () => {
  const [active, setActive] = useState(0);
  return (
    <div>
      <MaxWidth className="pt-20 text-white pb-20 space-y-5">
        <div className="flex pb-5 w-full max-w-6xl mx-auto items-center gap-x-3">
          <img
            className="md:w-[247px] md:h-[247px] w-[90px] h-[90px]"
            src="Vector.png"
            alt=""
          />
          <p className="md:text-[70px] text-2xl  leading-snug font-black">
            ПРИВАТНЫЕ ЧИТЫ <br /> ОТ TRY
            <span className="text-[#5EFFF5]">2</span>WIN
          </p>
        </div>

        <div className="text-white  flex items-center gap-x-3 border-2 rounded-xl p-4 border-[#5DFFF5] bg-[#0B1F1D] w-full max-w-6xl mx-auto">
          <Search width={20} height={20} className="text-[#62FFF6]" />
          <input
            className="font-normal border-none outline-none bg-transparent w-full text-2xl placeholder:font-normal placeholder:text-white placeholder:text-2xl"
            type="text"
            placeholder="Battlefield"
          />
        </div>

        <div className="mt-5 flex flex-wrap  justify-center items-center gap-4">
          {data.map((item, i) => {
            const isActive = i === active;
            return (
              <button
                onClick={() => setActive(i)}
                className={`px-7 ${
                  isActive
                    ? 'border-[#17F1FF] border-2 text-[#17F1FF] bg-[#043633]'
                    : 'border-2 border-[#2C7B73] bg-[#0B1F1D] text-[#2C7B73] '
                } font-bold text-[11px] py-2 rounded-md  `}
              >
                {item}
              </button>
            );
          })}
        </div>

        <div>
          <div className="flex max-md:flex-col justify-between max-md:gap-y-5 gap-x-10">
            <div
              style={{
                background:
                  'linear-gradient(150.74deg, #17302E 8.29%, #48968F 189.21%)',
              }}
              className="border-2 box-sh border-[#5DFEF4] rounded-2xl shadow-xl p-5 w-full h-full"
            >
              <div className="py-6 space-y-5 px-5 text-white border-[#5DFEF4] border-dashed border-2 w-full h-full border-b-0 rounded-2xl rounded-b-none">
                <div className="flex justify-between items-center">
                  <h1 className="md:text-[26px] text-2xl text-sh font-extrabold text-[#5EFFF5]">
                    КТО МЫ?
                  </h1>
                  <div className="py-2 px-4 rounded-md box-sh bg-[#1F6864] text-[#5EFFF5s]">
                    <p className="font-extrabold text-[20px]">1</p>
                  </div>
                </div>

                <div className="bgr w-full h-1 rounded-full"></div>

                <p className="font-semibold text-[13px]">
                  Принимая во внимание показатели успешности, <br /> ебаа того
                  рот ебал <br />
                  повышение уровня гражданского сознания играет <br /> вот и все
                  всем пизда <br /> определяющее значение для вывода текущих
                </p>
                {/* 2 */}
                <div className="flex justify-between items-center">
                  <h1 className="md:text-[26px] text-2xl text-sh font-extrabold text-[#5EFFF5]">
                    БОЛЕЕ 500 DLC
                  </h1>
                  <div className="py-2 px-4 rounded-md box-sh bg-[#1F6864] text-[#5EFFF5s]">
                    <p className="font-extrabold text-[20px]">1</p>
                  </div>
                </div>

                <div className="bgr w-full h-1 rounded-full"></div>

                <p className="font-semibold text-[13px]">
                  Принимая во внимание показатели успешности, ебаа того рот ебал{' '}
                  <br />
                  повышение уровня гражданского сознания играет вот и все всем{' '}
                  <br />
                  пизда. еба того рот ефиопыч <br />
                  Всем привет и с вами <br />
                  опять эфиоп который будет глотать яйца всего мира Добро <br />
                  пожаловать в мир пиздеца а в добавок знайте что такое смерть.{' '}
                  <br />
                </p>

                <div className="w-full max-h-[167px] h-full rounded-lg border-2 border-[#5EFFF5]">
                  <img
                    src="111.png"
                    className="w-full h-full max-h-[167px] box-sh object-cover "
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full gap-10">
              <div
                style={{
                  background:
                    'linear-gradient(150.74deg, #17302E 8.29%, #48968F 189.21%)',
                }}
                className="border-2 box-sh border-[#5DFEF4] rounded-2xl shadow-xl p-5 w-full"
              >
                <div className="py-6 space-y-5 px-5 text-white border-[#5DFEF4] border-dashed border-2 w-full h-full border-b-0 rounded-2xl rounded-b-none">
                  <div className="flex justify-between items-center">
                    <h1 className="md:text-[26px] text-2xl text-sh font-extrabold text-[#5EFFF5]">
                      НАДЕЖНО И БЕЗОПАСНО
                    </h1>
                    <div className="py-2 px-4 rounded-md box-sh bg-[#1F6864] text-[#5EFFF5s]">
                      <p className="font-extrabold text-[20px]">2</p>
                    </div>
                  </div>

                  <div className="bgr w-full h-1 rounded-full"></div>

                  <div className="w-full max-md:flex-col max-md:space-y-4 flex justify-between items-center">
                    <p className="font-semibold text-[13px]">
                      Принимая во внимание показатели успешности, <br /> ебаа
                      того рот ебал повышение уровня гражданского сознания
                      играет вот и <br />
                      все всем пизда определяющее значение для <br /> вывода
                      текущих активов. что ты там сказал? Прежде всего,
                      сложившаяся <br />
                      структура.
                    </p>

                    <img
                      className="md:w-[153] max-md:w-full h-[161px] rounded-lg box-sh"
                      src="222.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div
                style={{
                  background:
                    'linear-gradient(150.74deg, #17302E 8.29%, #48968F 189.21%)',
                }}
                className="border-2 box-sh border-[#5DFEF4] rounded-2xl shadow-xl p-5 w-full"
              >
                <div className="py-6 space-y-5 px-5 text-white border-[#5DFEF4] border-dashed border-2 w-full h-full border-b-0 rounded-2xl rounded-b-none">
                  <div className="flex justify-between items-center">
                    <h1 className="md:text-[26px] text-2xl text-sh font-extrabold text-[#5EFFF5]">
                      ЛУЧШИЕ НА РЫНКЕ
                    </h1>
                    <div className="py-2 px-4 rounded-md box-sh bg-[#1F6864] text-[#5EFFF5s]">
                      <p className="font-extrabold text-[20px]">2</p>
                    </div>
                  </div>

                  <div className="bgr w-full h-1 rounded-full"></div>

                  <div className="w-full max-md:flex-col flex justify-between max-md:space-y-4 items-center">
                    <p className="font-semibold text-[13px]">
                      Принимая во внимание показатели успешности, <br /> ебаа
                      того рот ебал повышение уровня гражданского сознания{' '}
                      <br /> играет вот и все всем пизда определяющее значение
                      для вывода <br /> текущих активов. что ты там сказал?
                      Прежде всего, <br /> сложившаяся структура.
                    </p>

                    <img
                      className="md:w-[153] max-md:w-full h-[161px] rounded-lg box-sh"
                      src="33.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1 className="font-extrabold md:text-[40px] text-3xl text-[#5EFFF5]">
          ДОБРО ПОЖАЛОВАТЬ НА <span className="text-white">SAFE</span> CHEATS
        </h1>

        <div className="w-full box-sh h-[528px] border-2 border-[#5EFFF5] rounded-lg">
          <img
            src="videoC.png"
            alt=""
            className="h-full rounded-lg w-full object-cover"
          />
        </div>

        <div className="w-full text-center space-y-3">
          <h1 className="text-center font-extrabold md:text-[43px] text-3xl">
            <span className="text-[#5DFFF5]">ПОПУЛЯРНЫЕ</span> ИГРЫ
          </h1>
          <p className="text-[23px] font-normal text-center">
            Более 500 читов на различные игры и мы подобрали для вас самые{' '}
            <br />
            популярные игры
          </p>
        </div>
        <div className="sm:pt-10  grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
          <GameCard isNew={true} top={true} hot={true} rate={false} />
          <GameCard2 hot={true} />
          <GameCard3 rate={true} top={true} />
          <GameCard3 rate={true} top={true} />
        </div>
        {/* 2 */}
        <div className="w-full text-center space-y-3">
          <h1 className="text-center font-extrabold md:text-[43px] text-3xl">
            <span className="text-[#5DFFF5]">ПОПУЛЯРНЫЕ</span> DLC
          </h1>
          <p className="text-[23px] font-normal text-center">
            Более 500 читов на различные игры и мы подобрали для вас самые{' '}
            <br />
            популярные игры
          </p>
        </div>
        <div className="sm:pt-10  grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
          <GameCard isNew={true} top={true} hot={true} rate={false} />
          <GameCard2 hot={true} />
          <GameCard3 rate={true} top={true} />
          <GameCard3 rate={true} top={true} />
        </div>
      </MaxWidth>
    </div>
  );
};

export default PrivateChat;
