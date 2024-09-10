import { useEffect, useState } from 'react';

const images = ['/g2.png', '/g3.png', '/g1.png', '/g2.png'];

export default function GameCard2({ isNew, top, hot, rate }) {
  const [hover, setHover] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [progress, setProgress] = useState([0, 0, 0, 0]);
  const [activeBar, setActiveBar] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        const updatedProgress = [...prevProgress];
        if (updatedProgress[activeBar] < 100) {
          updatedProgress[activeBar] += 1;
          return updatedProgress;
        } else {
          // Reset current bar and activate next bar
          updatedProgress[activeBar] = 0;
          const nextBar = (activeBar + 1) % 4;
          setActiveBar(nextBar);

          // Change image when a progress bar is completed
          setCurrentImage(prevImage => (prevImage + 1) % images.length);

          return updatedProgress;
        }
      });
    }, 50); // Update every 50ms (5 seconds to reach 100)

    return () => clearInterval(interval);
  }, [activeBar]);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="max-w-[310px] w-full max-h-[370px] h-full bg-gray-900 rounded-2xl overflow-hidden relative"
    >
      <div className="absolute top-0 left-0 right-0 p-5 z-10">
        <div className="rounded-full p-1">
          <div className="flex space-x-1">
            {progress.map((prog, index) => (
              <div
                key={index}
                className={`h-2 w-1/4 border-2 border-[#17F1FF] bg-[#0C3432] rounded-full ${
                  index === activeBar
                    ? 'shadow-[0_0_4px_1px_rgba(0,255,255,0.6)]'
                    : ''
                }`}
              >
                <div
                  className="h-full bg-teal-400 rounded-full transition-all duration-50 ease-linear"
                  style={{ width: `${prog}%` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <img
        src={images[currentImage]}
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
            <h2 className="text-white text-start text-[17px] font-semibold">
              Cheat
            </h2>
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
