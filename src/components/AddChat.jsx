import { TriangleAlert } from 'lucide-react';
import React, { useState } from 'react';
import PhotoUpload from './PhotoUpload';

const chitData = ['POPULAR', 'TOP', 'NEW', 'RATE', 'LATER'];
const statusData = ['UNDETECTED', 'DETECTED', 'RISK', 'ON UPDATE'];

const AddChat = () => {
  const [chitActive, setChitActive] = useState(0);
  const [statusActive, setStatusActive] = useState(0);
  return (
    <div className="backround-color border-2 gap-5 text-white rounded-lg border-[#5DFFF5] py-5 px-10 w-full">
      <h1 className="text-2xl font-extrabold">
        ДОБАВЛЕНИЕ <span className="text-[#5CFFF5]">ЧИТА</span>
      </h1>
      <div className="flex justify-between gap-5 mt-5">
        <div className="flex flex-col gap-5 max-w-[431px] w-full">
          <input
            type="text"
            placeholder="Название чита"
            className="py-2 px-4 shadow-2xl font-medium text-base placeholder:font-medium placeholder:text-base placeholder:text-white bg-[#17302E] border-[#3C7D77] border-2 rounded-lg"
          />
          <textarea
            className="py-2 shadow-2xl h-[265px] px-4 font-medium text-base placeholder:font-medium placeholder:text-base placeholder:text-white bg-[#17302E] border-[#3C7D77] border-2 rounded-lg"
            placeholder="Описание чита (RU)"
          ></textarea>
        </div>

        <div className="flex flex-col gap-5 max-w-[248px] w-full">
          <h1 className="font-medium text-base">Теги для чита</h1>

          <div className="border-2 shadow-2xl border-[#3C7D77] rounded-lg bg-[#17302E] p-3">
            <div className="flex items-center gap-3 flex-wrap">
              {chitData.map((chit, i) => {
                const isActive = i === chitActive;
                return (
                  <button
                    key={i}
                    onClick={() => setChitActive(i)}
                    className={`border-2 ${
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

          <div className="border shadow-2xl border-[#3C7D77] gap-y-1 text-center flex flex-col items-center justify-center rounded-lg bg-[#17302E] p-3">
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

      <div className="flex gap-5 mt-4">
        <textarea
          className="py-2 shadow-2xl h-[265px] px-4 font-medium text-base placeholder:font-medium placeholder:text-base placeholder:text-white bg-[#17302E] border-[#3C7D77] border-2 rounded-lg"
          placeholder="Описание чита (RU)"
        ></textarea>

        <div className="flex flex-col gap-3 max-w-[248px] w-full">
          <h1 className="font-medium text-base">Статус чита</h1>

          <div className="border-2 shadow-2xl border-[#3C7D77] rounded-lg bg-[#17302E] p-3">
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
                    }  rounded-lg font-bold text-[11px] min-w-[90px] py-1 px-4 `}
                  >
                    {chit}
                  </button>
                );
              })}
            </div>
          </div>
          <h1 className="font-medium text-base">Ссылка на видео чита</h1>
          <div className="border-2 flex flex-col shadow-2xl border-[#3C7D77] rounded-lg bg-[#17302E] p-3">
            <textarea
              placeholder="Вставте ссылку"
              className="h-[79px] resize-none rounded-md p-2 border border-[#2C7B73] bg-[#0B1F1D] text-white placeholder:font-medium placeholder:text-[10px] font-medium text-[10px]"
            ></textarea>
            <p className="text-center text-[#FF7575] font-medium text-xs">
              Не использовать видео-хостинги заблокированные РКН
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddChat;
