import { Plus, TriangleAlert, X } from 'lucide-react';
import React, { useState } from 'react';
import { systemInfo } from '../constants';
import ChearForm from './CheatForm';
import GameSelect from './GameSelect';
import PhotoUpload from './PhotoUpload';
import Product from './Product';

const chitData = ['POPULAR', 'TOP', 'NEW', 'RATE', 'LATER'];
const statusData = ['UNDETECTED', 'DETECTED', 'RISK', 'ON UPDATE'];
const functsiyaData = [
  'AIM-BOT',
  'ESP',
  'SKIN-CHANGER',
  'RAPID-FIRE',
  'CHAMS',
  'MAP-HACK',
  'BUNNY-HOP',
  'SILENT-AIM',
];

const systemData = [
  'Укажите клиент',
  'Укажите процессор',
  'Укажите OCs',
  'Укажите спуфер',
  'Укажите античит',
  'Укажите режим окна',
];

const AddChat = () => {
  const [chitActive, setChitActive] = useState(0);
  const [statusActive, setStatusActive] = useState(0);
  const [functionActive, setFunctionActive] = useState(0);
  return (
    <div className="backround-color box-sh border-2 gap-5 text-white rounded-lg border-[#5DFFF5] py-5 pb-10 px-10 w-full">
      <h1 className="md:text-2xl text-lg font-extrabold">
        ДОБАВЛЕНИЕ <span className="text-[#5CFFF5]">ЧИТА</span>
      </h1>
      <div className="flex max-md:flex-col justify-between gap-5 mt-5">
        <div className="flex flex-col gap-5 md:max-w-[431px] w-full">
          <input
            type="text"
            placeholder="Название чита"
            className="py-2 px-4 shadow-2xl font-medium text-base placeholder:font-medium placeholder:text-base placeholder:text-white bg-[#17302E] border-[#3C7D77] border-2 box-sh rounded-lg"
          />
          <textarea
            className="py-2 shadow-2xl h-[265px] px-4 font-medium text-base placeholder:font-medium placeholder:text-base placeholder:text-white bg-[#17302E] border-[#3C7D77] border-2 box-sh rounded-lg"
            placeholder="Описание чита (RU)"
          ></textarea>
        </div>

        <div className="flex flex-col gap-5 md:max-w-[248px] w-full">
          <h1 className="font-medium text-base">Теги для чита</h1>

          <div className="border-2 box-sh border-[#3C7D77] rounded-lg bg-[#17302E] p-3">
            <div className="flex items-center gap-3 flex-wrap">
              {chitData.map((chit, i) => {
                const isActive = i === chitActive;
                return (
                  <button
                    key={i}
                    onClick={() => setChitActive(i)}
                    className={`border-2 box-sh ${
                      isActive
                        ? 'border-[#36FFF3] text-[#17F1FF] shadow-[0_0_4px_1px_rgba(0,255,255,0.6)]'
                        : 'border-[#2C7B73] text-[#2C7B73] bg-[#0B1F1D]'
                    }  rounded-lg font-bold text-[11px] max-w-[90px] w-full py-1 px-4 `}
                  >
                    {chit}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="border box-sh border-[#3C7D77] gap-y-1 text-center flex flex-col items-center justify-center rounded-lg bg-[#17302E] p-3">
            <p className="text-[#75FFF6]">
              <TriangleAlert width={20} height={20} />
            </p>
            <p className="font-medium text-base">Фото игры</p>
            <p className="text-[#75FFF6] font-medium text-xs">
              Размер фото 327x394
            </p>
            <button className="w-full py-3 rounded-lg bg-[#4CB4AD] text-base font-semibold">
              Загрузить
            </button>
          </div>
        </div>

        <div className="mt-11">
          <PhotoUpload />
        </div>
      </div>

      <div className="flex max-md:flex-col gap-5 mt-4">
        <div className="mt-4 md:max-w-[354px] w-full">
          <textarea
            className="py-2 md:w-full max-h-[345px] h-full shadow-2xl px-4 font-medium text-base placeholder:font-medium placeholder:text-base placeholder:text-white bg-[#17302E] border-[#3C7D77] border-2 box-sh rounded-lg"
            placeholder="Описание чита (RU)"
          ></textarea>
        </div>

        <div className="flex flex-col gap-3 md:max-w-[248px] w-full">
          <h1 className="font-medium text-base">Статус чита</h1>

          <div className="border-2 box-sh border-[#3C7D77] rounded-lg bg-[#17302E] p-3">
            <div className="grid grid-cols-2 gap-3 flex-wrap">
              {statusData.map((chit, i) => {
                const isActive = i === statusActive;
                return (
                  <button
                    key={i}
                    onClick={() => setStatusActive(i)}
                    className={`border-2 ${
                      isActive
                        ? 'border-[#18FB8E] text-[#17FF90] shadow-[0_0_4px_1px_rgba(0,255,255,0.6)]'
                        : 'border-[#2C7B73] text-[#2C7B73] bg-[#0B1F1D]'
                    }  rounded-lg font-bold sm:text-[11px] text-[6px] sm:min-w-[90px] py-1 px-4 `}
                  >
                    {chit}
                  </button>
                );
              })}
            </div>
          </div>
          <h1 className="font-medium text-base">Ссылка на видео чита</h1>
          <div className="border-2 box-sh flex flex-col h-full justify-between shadow-2xl border-[#3C7D77] rounded-lg bg-[#17302E] p-3">
            <textarea
              placeholder="Вставте ссылку"
              className="h-[100px] resize-none rounded-md p-2 border border-[#2C7B73] bg-[#0B1F1D] text-white placeholder:font-medium placeholder:text-[10px] font-medium text-[10px]"
            ></textarea>
            <p className="text-center text-[#FF7575] font-medium text-xs">
              Не использовать видео-хостинги заблокированные РКН
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="font-medium text-base">Статус чита</h1>
          <GameSelect />
        </div>
      </div>

      <div className="mt-4 text-white flex max-md:flex-col justify-between gap-5">
        <div className="flex flex-col gap-3  md:w-1/2">
          <h1 className="text-base font-medium">Функции чита</h1>
          <div className="border-2 h-full box-sh border-[#3C7D77] rounded-lg bg-[#17302E] p-3">
            <div className="flex flex-col h-full max-md:space-y-5 justify-between">
              <div className="flex items-center gap-3 flex-wrap">
                {functsiyaData.map((chit, i) => {
                  const isActive = i === functionActive;
                  return (
                    <button
                      key={i}
                      onClick={() => setFunctionActive(i)}
                      className={`border-2 box-sh ${
                        isActive
                          ? 'border-[#36FFF3] text-[#17F1FF] bg-[#215D5A] shadow-[0_0_4px_1px_rgba(0,255,255,0.6)]'
                          : 'border-[#2C7B73] text-[#2C7B73] bg-[#0B1F1D]'
                      }  rounded-lg font-bold sm:text-sm text-xs  py-2 px-4 `}
                    >
                      {chit}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center flex-wrap gap-2">
                <button className="p-3 border-2 rounded-md border-[#51FF4E] text-[#51FF4E]">
                  <Plus width={10} height={10} />
                </button>
                <button className="p-3 border-2 rounded-md border-[#FF4E4E] text-[#FF4E4E]">
                  <X width={10} height={10} />
                </button>
                <input
                  type="text"
                  placeholder="Введите тег функции чита (максимум 10) "
                  className="w-full border-2 border-[#5BC6BC] rounded-md p-2 bg-[#0B1F1D] text-white placeholder:font-medium placeholder:text-[10px] font-medium text-[10px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col gap-3">
          <h1 className="text-base font-medium ">Описание функции чита</h1>
          <div className="border-2 box-sh shadow-2xl border-[#3C7D77] rounded-lg bg-[#17302E] p-3">
            <div className="h-full flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <div className="flex max-sm:flex-col items-center gap-2">
                  <button className="bg-[#4CB4AD] px-4 py-1 rounded-md text-xs font-medium">
                    Сохранить описание
                  </button>
                  <button className="bg-[#B4714C] px-4 py-1 rounded-md text-xs font-medium">
                    Сохранить описание
                  </button>
                </div>

                <X width={15} height={15} />
              </div>

              <div className="flex gap-3">
                <div className="w-2 max-sm:hidden rounded-full bg-[#081817]">
                  <div className="mt-10 w-full h-[56px] bg-[#5DFFF5] rounded-full" />
                </div>
                <div className="w-full border-2 box-sh p-3 border-[#3C7D77] rounded-lg bg-[#17302E]">
                  <ul className="flex flex-col gap-3">
                    <li className="flex items-center gap-x-2 font-medium sm:text-sm text-[8px]">
                      <img
                        className="sm:w-[18px] w-[10px] h-[10px] sm:h-[18px]"
                        src="r1.png"
                        alt=""
                      />
                      Aim Enable
                    </li>
                    <li className="flex items-center gap-x-2 font-medium sm:text-sm text-[8px]">
                      <img
                        className="sm:w-[18px] w-[10px] h-[10px] sm:h-[18px]"
                        src="r1.png"
                        alt=""
                      />
                      Bone Selector (Head/Neck/Chest/Arms/Legs)
                    </li>
                    <li className="flex items-center gap-x-2 font-medium sm:text-sm text-[8px]">
                      <img
                        className="sm:w-[18px] w-[10px] h-[10px] sm:h-[18px]"
                        src="r1.png"
                        alt=""
                      />
                      Silent Aim
                    </li>
                    <li className="flex items-center gap-x-2 font-medium sm:text-sm text-[8px]">
                      <img
                        className="sm:w-[18px] w-[10px] h-[10px] sm:h-[18px]"
                        src="r1.png"
                        alt=""
                      />
                      Auto Fire
                    </li>
                    <li className="flex items-center gap-x-2 font-medium sm:text-sm text-[8px]">
                      <img
                        className="sm:w-[18px] w-[10px] h-[10px] sm:h-[18px]"
                        src="r1.png"
                        alt=""
                      />
                      Auto Shot
                    </li>
                    <li className="flex items-center gap-x-2 font-medium sm:text-sm text-[8px]">
                      <img
                        className="sm:w-[18px] w-[10px] h-[10px] sm:h-[18px]"
                        src="r1.png"
                        alt=""
                      />
                      Triger-bot
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 max-md:flex-col text-white flex gap-5">
        <div className="md:w-[188px] cursor-pointer rounded-md h-[97px] text-base font-medium box-sh bg-[#142E2B] flex items-center justify-center text-center border-2 border-[#60FCF2]">
          Добавить <br /> Товар
        </div>
        <div className="md:w-[188px] cursor-pointer rounded-md h-[97px] text-base font-medium box-sh bg-[#271B1B] flex items-center justify-center text-center border-2 border-[#D16060]">
          Добавить <br /> Товар
        </div>
      </div>

      <div className="mt-4 text-white">
        <Product />
      </div>

      <div className="mt-4 text-white">
        <h1 className="text-base font-medium">Системные требования чита</h1>

        <div className="flex items-center max-md:flex-col max-md:space-y-5 mt-5 justify-between gap-x-5">
          <div className="bg-[#17302E] border-2 rounded-lg p-5 border-[#3C7D77] box-sh max-md:w-full md:w-1/2">
            <ul className="flex flex-col gap-6">
              {systemInfo.map(data => (
                <li className="flex items-center gap-x-4 md:text-lg sm:text-base text-[10px] font-medium">
                  <img
                    className="md:w-[43px] md:h-[43px] w-7 h-7"
                    src={data.icon}
                    alt=""
                  />{' '}
                  {data.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4 max-md:w-full md:w-1/2">
            {systemData.map(data => (
              <input
                placeholder={data}
                className="bg-[#17302E] placeholder:text-white border-2 p-3 rounded-lg font-medium text-base border-[#3C7D77] box-sh"
              ></input>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 text-white space-y-4">
        <h1 className="sm:text-base text-sm font-medium">
          Необходимые компоненты либо устройства для запуска чита (НЕ
          ОБЯЗАТЕЛЬНО)
        </h1>
        <ChearForm />
      </div>
    </div>
  );
};

export default AddChat;
