import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navItems } from '../constants';

const MobilNav = () => {
  const { pathname } = useLocation();
  return (
    <div className="lg:hidden">
      <div className="pt-2 pb-3 space-y-1">
        {navItems.map(item => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.name}
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
          <img width={20} height={20} src="Telegram.png" alt="" />
          <img width={20} height={20} src="Discord.png" alt="" />
          <select
            defaultValue={'ru'}
            className="border-none bg-transparent outline-none"
            id="lang"
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

export default MobilNav;
