import { useState } from 'react';
import { useRecoilState } from 'recoil';
import languageState from '../atom/languageAtom';

export default function GameSelect() {
  const [selectedLanguage] = useRecoilState(languageState);

  const [selectedGame, setSelectedGame] = useState(0);

  const games = [
    'Call of Duty: MW3',
    'Battlefield 4',
    'Battlefield 2042',
    'Counter-Strike 2',
    'Counter-Strike 1.6',
    'Warface',
    'Call of Duty: Warzone',
    'Escape From Tarkov',
    'Arena: BreakEBALA',
    'Rogue: Company',
    'Valorant',
  ];

  return (
    <div className="border-2 box-sh border-[#3C7D77] rounded-lg bg-[#17302E] p-3">
      <div className="flex gap-x-3">
        <div className="max-h-96 w-2 rounded-full bg-[#081817]">
          <div
            className={`${`mt-${selectedGame}`} mt w-full h-[56px] bg-[#5DFFF5] rounded-full`}
          />
        </div>
        <ul className="space-y-1">
          {games.map((game, index) => (
            <li
              key={index}
              className={`flex font-medium sm:text-base text-xs items-center cursor-pointer ${
                selectedGame === index
                  ? 'text-[#5DFFF5] hover:text-teal-100'
                  : 'text-white'
              }`}
              onClick={() => setSelectedGame(index)}
            >
              {selectedGame === game && (
                <div className="w-1 h-6 bg-teal-400 mr-2 rounded-r"></div>
              )}
              <span className={selectedGame === game ? 'ml-1' : 'ml-3'}>
                {game}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
