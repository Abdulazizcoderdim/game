import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import languageState from '../atom/languageAtom';
import { navItemsEn, navItemsRu } from '../constants';
import MaxWidth from './MaxWidth';
import MobilNav from './MobilNav';

const Header = () => {
  const [selectedLanguage, setSelectedLanguage] = useRecoilState(languageState);

  const { pathname } = useLocation();
  const [close, setClose] = useState(true);
  const [modalTg, setModalTg] = useState(false);

  const handleLanguageChange = e => {
    setSelectedLanguage(e.target.value);
  };

  const navItems = selectedLanguage === 'ru' ? navItemsRu : navItemsEn;

  return (
    <div>
      <MaxWidth className="py-4 bg-[#041F1D] text-white">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-x-2">
            <img width={57} height={51} src="Vector.png" alt="" />
            <img width={116} height={28} src="TRY2WIN.png" alt="" />
          </Link>

          <ul className="lg:flex hidden items-center gap-x-10">
            {navItems.map((item, i) => {
              const isActive = pathname === item.path;
              return (
                <li
                  className={`${
                    isActive
                      ? 'border-2 border-[#36FFF3] rounded-lg bg-[#05413D] py-1 px-4 shadow-[0_0_4px_1px_rgba(0,255,255,0.6)]'
                      : 'font-normal text-base'
                  }`}
                  key={i}
                >
                  <Link to={item.path}>{item.name}</Link>
                </li>
              );
            })}
          </ul>

          <div className="lg:flex hidden items-center gap-x-4">
            <img width={20} height={20} src="Telegram.png" alt="" />
            <img width={20} height={20} src="Discord.png" alt="" />
            <select
              onChange={handleLanguageChange}
              value={selectedLanguage}
              className="border-none bg-transparent outline-none"
            >
              <option className="bg-[#041F1D]" value="ru">
                RU
              </option>
              <option className="bg-[#041F1D]" value="en">
                EN
              </option>
            </select>
          </div>

          <div
            onClick={() => setModalTg(prev => !prev)}
            className="text-white lg:hidden cursor-pointer"
          >
            {modalTg ? <X /> : <Menu />}
          </div>
          {/* modal */}
        </div>
        {modalTg && <MobilNav />}
      </MaxWidth>

      {close && (
        <div className="flex bg-[#27A79F] items-center py-2 text-white relative">
          <p className="font-medium sm:text-base text-xs w-full text-center">
            {selectedLanguage === 'ru' ? (
              <>
                Присоединяйтесь к нашему <br className="sm:hidden" /> сообществу
                в Telegram.
              </>
            ) : (
              <>
                Join our community <br className="sm:hidden" /> in Telegram.
              </>
            )}
          </p>
          <button onClick={() => setClose(false)} className="absolute right-2">
            <X />
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
