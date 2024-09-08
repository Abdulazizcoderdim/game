import { X } from 'lucide-react';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navItems } from '../constants';
import MaxWidth from './MaxWidth';

const Header = () => {
  const { pathname } = useLocation();
  const [close, setClose] = useState(true);
  return (
    <div>
      <MaxWidth className="py-4 bg-[#041F1D] text-white">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-x-2">
            <img width={57} height={51} src="Vector.png" alt="" />
            <img width={116} height={28} src="TRY2WIN.png" alt="" />
          </Link>

          <ul className="flex items-center gap-x-10">
            {navItems.map(item => {
              const isActive = pathname === item.path;
              return (
                <li
                  className={`${
                    isActive
                      ? 'border-2 border-[#36FFF3] rounded-lg bg-[#05413D] py-1 px-4 shadow-[0_0_4px_1px_rgba(0,255,255,0.6)]'
                      : 'font-normal text-base'
                  }`}
                  key={item.name}
                >
                  <Link to={item.path}>{item.name}</Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-x-4">
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
      </MaxWidth>

      {close && (
        <div className="flex bg-[#27A79F] items-center py-2 text-white relative">
          <p className="font-medium text-base w-full text-center">
            Присоединяйтесь к нашему сообществу в Telegram
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
