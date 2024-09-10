import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import languageState from '../atom/languageAtom';
import { navItemsEn, navItemsRu } from '../constants';

const MobileNav = () => {
  const [selectedLanguage, setSelectedLanguage] = useRecoilState(languageState);
  const { pathname } = useLocation();

  const handleLanguageChange = e => {
    setSelectedLanguage(e.target.value);
  };

  // Use the correct nav items based on the selected language
  const navItems = selectedLanguage === 'ru' ? navItemsRu : navItemsEn;

  return (
    <div className="lg:hidden">
      <div className="pt-2 pb-3 space-y-1">
        {navItems.map(item => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path} // Changed from item.name to item.path for uniqueness
              to={item.path}
              className={`block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 ${
                isActive ? 'bg-gray-700' : ''
              } hover:bg-gray-700`}
            >
              {item.name}
            </Link>
          );
        })}
        <div className="flex items-center pl-3 gap-x-4">
          <img width={20} height={20} src="Telegram.png" alt="Telegram" />
          <img width={20} height={20} src="Discord.png" alt="Discord" />
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
      </div>
    </div>
  );
};

export default MobileNav;
