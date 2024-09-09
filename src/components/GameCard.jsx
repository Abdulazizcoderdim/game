import { useState } from 'react';

export default function GameCard({ src, isNew, top, hot, rate }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="max-w-[310px] box-sh w-full max-h-[370px] h-full bg-gray-900 rounded-2xl overflow-hidden relative"
    >
      <div className="absolute top-0 left-0 right-0 p-5 z-10">
        <div className="rounded-full p-1">
          <div className="flex space-x-1">
            <div className="h-2 w-1/4 border-2 border-[#17F1FF] bg-[#0C3432] rounded-full">
              <div className="h-full w-1/2 bg-teal-400 rounded-full" />
            </div>
            <div className="h-2 w-1/4 border-2 border-[#17F1FF] bg-[#0C3432] rounded-full"></div>
            <div className="h-2 w-1/4 border-2 border-[#17F1FF] bg-[#0C3432] rounded-full"></div>
            <div className="h-2 w-1/4 border-2 border-[#17F1FF] bg-[#0C3432] rounded-full"></div>
          </div>
        </div>
      </div>
      <img
        src={src}
        alt="Game character"
        width={256}
        height={384}
        className="object-cover w-full h-full"
      />
      <div
        className={`absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t ${
          hover ? 'from-[#3CB1AA]' : 'from-black'
        } to-transparent`}
      >
        <div className="flex justify-between items-end">
          <div>
            <div className="flex space-x-2 mb-2">
              {isNew && (
                <button className="border-2 border-[#36FFF3] rounded-lg bg-[#05413D] py-1 px-2 text-[11px] font-bold shadow-[0_0_4px_1px_rgba(0,255,255,0.6)]">
                  NEW
                </button>
              )}
              {top && (
                <button className="border-2 border-[#36FFF3] rounded-lg bg-[#05413D] py-1 px-2 text-[11px] font-bold shadow-[0_0_4px_1px_rgba(0,255,255,0.6)]">
                  TOP
                </button>
              )}
              {hot && (
                <button className="border-2 border-[#36FFF3] rounded-lg bg-[#05413D] py-1 px-2 text-[11px] font-bold shadow-[0_0_4px_1px_rgba(0,255,255,0.6)]">
                  HOT
                </button>
              )}
              {rate && (
                <button className="border-2 border-[#36FFF3] rounded-lg bg-[#05413D] py-1 px-2 text-[11px] font-bold shadow-[0_0_4px_1px_rgba(0,255,255,0.6)]">
                  RATE
                </button>
              )}
            </div>
            <h2 className="text-white text-[17px] font-semibold">Cheat</h2>
          </div>
          <div className="text-white ">
            <p className="text-end text-[11px] text-[#A6ACC2] font-semibold">
              OT
            </p>
            <p className="text-[15px] font-bold">170₽</p>
          </div>
        </div>
        <button
          className={`text-white transition-all duration-300 font-extrabold text-[13px] bg-[#3CB1AA] mt-3 w-full ${
            !hover && 'hidden'
          } text-clip py-2 rounded-md`}
        >
          Подробнее
        </button>
      </div>
    </div>
  );
}
