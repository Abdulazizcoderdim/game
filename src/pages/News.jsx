import { Search } from 'lucide-react';
import React, { useState } from 'react';
import GameCard from '../components/GameCard';
import MaxWidth from '../components/MaxWidth';

const data = ['POPULAR', 'TOP', 'NEW', 'RATE', 'LATER'];

const News = () => {
  const [active, setActive] = useState(0);
  return (
    <div>
      <MaxWidth className="pt-20 text-center text-white space-y-5">
        <div className="max-w-xl mx-auto">
          <h1 className="font-black md:text-[56px] text-3xl">BATTLEFIELD 4</h1>
          <p className="font-normal mt-8 md:text-2xl text-xl">
            Большой выбор различных игр, воспользуйтесь поиском для быстрого
            доступа к разделу.
          </p>
        </div>
        <div className="text-white flex items-center gap-x-3 border-2 rounded-xl p-4 border-[#5DFFF5] bg-[#0B1F1D] w-full max-w-6xl mx-auto">
          <Search width={20} height={20} className="text-[#62FFF6]" />
          <input
            className="font-normal border-none outline-none bg-transparent w-full text-2xl placeholder:font-normal placeholder:text-white placeholder:text-2xl"
            type="text"
            placeholder="Battlefield"
          />
        </div>

        <div className="mt-5 flex flex-wrap justify-center items-center gap-4">
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

        <div className="sm:pt-10 pb-10 grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
          <GameCard
            src="g1.png"
            isNew={true}
            top={true}
            hot={true}
            rate={false}
          />
          <GameCard src="g2.png" hot={true} />
          <GameCard src={'g3.png'} rate={true} top={true} />
          <GameCard src={'g3.png'} rate={true} top={true} />
          <GameCard src="g1.png" isNew={true} top={true} hot={true} />
          <GameCard src="g2.png" hot={true} />
          <GameCard src={'g3.png'} rate={true} top={true} />
          <GameCard src={'g3.png'} rate={true} top={true} />
        </div>

        <div className="w-full border-2 flex-wrap bg-[#0E1A19] rounded-lg border-dashed border-[#55FFF5] px-20 py-14 text-ellipsis flex items-center justify-center gap-4 text-[#53FFF5]">
          <p className="md:text-[32px] text-xl font-medium">РЕКЛАМА</p>
          <p className="md:text-[32px] text-xl font-medium">РЕКЛАМА</p>
          <p className="md:text-[32px] text-xl font-medium">РЕКЛАМА</p>
          <p className="md:text-[32px] text-xl font-medium">РЕКЛАМА</p>
          <p className="md:text-[32px] text-xl font-medium">РЕКЛАМА</p>
        </div>

        <div className="pt-10 grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
          <GameCard
            src="g1.png"
            isNew={true}
            top={true}
            hot={true}
            rate={false}
          />
          <GameCard src="g2.png" hot={true} />
          <GameCard src={'g3.png'} rate={true} top={true} />
          <GameCard src={'g3.png'} rate={true} top={true} />
          <GameCard src="g1.png" isNew={true} top={true} hot={true} />
          <GameCard src="g2.png" hot={true} />
          <GameCard src={'g3.png'} rate={true} top={true} />
          <GameCard src={'g3.png'} rate={true} top={true} />
          <GameCard
            src="g1.png"
            isNew={true}
            top={true}
            hot={true}
            rate={false}
          />
          <GameCard src="g2.png" hot={true} />
          <GameCard src={'g3.png'} rate={true} top={true} />
          <GameCard src={'g3.png'} rate={true} top={true} />
        </div>
      </MaxWidth>
    </div>
  );
};

export default News;
