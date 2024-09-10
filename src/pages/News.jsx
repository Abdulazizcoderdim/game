import { Search } from 'lucide-react';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import languageState from '../atom/languageAtom';
import GameCard from '../components/GameCard';
import GameCard2 from '../components/GameCard2';
import GameCard3 from '../components/GameCard3';
import MaxWidth from '../components/MaxWidth';

const News = () => {
  const [selectedLanguage] = useRecoilState(languageState);
  const data = ['POPULAR', 'TOP', 'NEW', 'RATE', 'LATER'];

  const [active, setActive] = useState(0);
  const [nameLevel, setNameLevel] = useState('POPULAR');
  return (
    <div>
      <MaxWidth className="pt-20 text-center text-white space-y-5">
        <div className="max-w-xl mx-auto">
          <h1 className="font-black md:text-[56px] text-3xl">
            {selectedLanguage === 'ru' ? 'НОВОСТИ' : 'BATTLEFIELD'}{' '}
            <span className="text-[#60FFF5]">4</span>
          </h1>
          <p className="font-normal mt-8 md:text-2xl text-xl">
            {selectedLanguage === 'ru'
              ? 'Большой выбор различных игр, воспользуйтесь поиском для быстрогодоступа к разделу.'
              : 'Big choice of different games, use search for quick access to the section.'}
          </p>
        </div>
        <div className="text-white flex items-center gap-x-3 border-2 rounded-xl p-4 border-[#5DFFF5] bg-[#0B1F1D] w-full max-w-6xl mx-auto">
          <Search width={20} height={20} className="text-[#62FFF6]" />
          <input
            className="font-normal border-none outline-none bg-transparent w-full text-2xl placeholder:font-normal placeholder:text-white placeholder:text-2xl"
            type="text"
            placeholder={selectedLanguage === 'ru' ? 'Battlefield' : 'Поле боя'}
          />
        </div>

        <div className="mt-5 flex flex-wrap justify-center items-center gap-4">
          {data.map((item, i) => {
            const isActive = i === active;
            return (
              <button
                key={i}
                set
                onClick={() => (setActive(i), setNameLevel(item))}
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
          {(nameLevel === 'TOP' ||
            nameLevel === 'LATER' ||
            nameLevel === 'POPULAR' ||
            nameLevel === 'HOT' ||
            nameLevel === 'NEW') && (
            <GameCard isNew={true} top={true} hot={true} rate={false} />
          )}
          {(nameLevel === 'HOT' ||
            nameLevel === 'LATER' ||
            nameLevel === 'POPULAR') && <GameCard2 hot={true} />}
          {(nameLevel === 'RATE' ||
            nameLevel === 'LATER' ||
            nameLevel === 'POPULAR' ||
            nameLevel === 'TOP') && <GameCard3 rate={true} top={true} />}
          {(nameLevel === 'RATE' ||
            nameLevel === 'LATER' ||
            nameLevel === 'POPULAR' ||
            nameLevel === 'TOP') && <GameCard3 rate={true} top={true} />}
          {(nameLevel === 'TOP' ||
            nameLevel === 'LATER' ||
            nameLevel === 'POPULAR' ||
            nameLevel === 'HOT' ||
            nameLevel === 'NEW') && (
            <GameCard isNew={true} top={true} hot={true} rate={false} />
          )}
          {(nameLevel === 'HOT' ||
            nameLevel === 'LATER' ||
            nameLevel === 'POPULAR') && <GameCard2 hot={true} />}
          {(nameLevel === 'RATE' ||
            nameLevel === 'LATER' ||
            nameLevel === 'POPULAR' ||
            nameLevel === 'TOP') && <GameCard3 rate={true} top={true} />}
          {(nameLevel === 'RATE' ||
            nameLevel === 'LATER' ||
            nameLevel === 'POPULAR' ||
            nameLevel === 'TOP') && <GameCard3 rate={true} top={true} />}
        </div>
        <div className="w-full border-2 flex-wrap bg-[#0E1A19] rounded-lg border-dashed border-[#55FFF5] px-20 py-14 text-ellipsis flex items-center justify-center gap-4 text-[#53FFF5]">
          <p className="md:text-[26px] text-xl font-medium">
            {selectedLanguage === 'ru' ? 'РЕКЛАМА' : 'ADVERTISING'}
          </p>
          <p className="md:text-[26px] text-xl font-medium">
            {' '}
            {selectedLanguage === 'ru' ? 'РЕКЛАМА' : 'ADVERTISING'}
          </p>
          <p className="md:text-[26px] text-xl font-medium">
            {' '}
            {selectedLanguage === 'ru' ? 'РЕКЛАМА' : 'ADVERTISING'}
          </p>
          <p className="md:text-[26px] text-xl font-medium">
            {' '}
            {selectedLanguage === 'ru' ? 'РЕКЛАМА' : 'ADVERTISING'}
          </p>
          <p className="md:text-[26px] text-xl font-medium">
            {' '}
            {selectedLanguage === 'ru' ? 'РЕКЛАМА' : 'ADVERTISING'}
          </p>
        </div>
        <div className="pt-10 grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
          <GameCard isNew={true} top={true} hot={true} rate={false} />
          <GameCard2 hot={true} />
          <GameCard3 rate={true} top={true} />
          <GameCard3 rate={true} top={true} />
          <GameCard isNew={true} top={true} hot={true} rate={false} />
          <GameCard2 hot={true} />
          <GameCard3 rate={true} top={true} />
          <GameCard3 rate={true} top={true} />
          <GameCard isNew={true} top={true} hot={true} rate={false} />
          <GameCard2 hot={true} />
          <GameCard3 rate={true} top={true} />
          <GameCard3 rate={true} top={true} />
        </div>
      </MaxWidth>
    </div>
  );
};

export default News;
