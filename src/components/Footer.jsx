import React from 'react';
import { Link } from 'react-router-dom';
import MaxWidth from './MaxWidth';

const Footer = () => {
  return (
    <div className="border-t-2 border-[#438D7E] bg-[#12211E]">
      <MaxWidth className="py-10">
        <div className="flex items-center justify-between max-sm:space-y-8 text-white">
          <Link to="/" className="flex items-center gap-x-2">
            <img width={57} height={51} src="Vector.png" alt="" />
            <img width={116} height={28} src="TRY2WIN.png" alt="" />
          </Link>
          <ul className="flex items-center gap-x-10">
            <li className="text-xl font-normal">Договор оферты</li>
            <li className="text-xl font-normal">Поддержка</li>
            <li className="text-xl font-normal">Новости</li>
            <li className="text-xl font-normal">Главная</li>
            <li className="text-xl font-normal">Каталог игр</li>
          </ul>
          <div>
            <p>Мы принимаем</p>
            <div className="flex items-center gap-x-2">
              <img src="M.png" alt="" />
              <img src="V.png" alt="" />
              <img src="MC.png" alt="" />
            </div>
          </div>
        </div>
      </MaxWidth>
    </div>
  );
};

export default Footer;
