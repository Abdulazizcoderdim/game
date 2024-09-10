import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import languageState from '../atom/languageAtom';
import MaxWidth from './MaxWidth';

const Footer = () => {
  const [selectedLanguage] = useRecoilState(languageState);

  return (
    <div className="border-t-2 border-[#438D7E] bg-[#12211E]">
      <MaxWidth className="py-10 ">
        <div className="xl:flex w-full max-xl:space-y-5 items-center justify-between max-sm:space-y-8 text-white">
          <Link
            to="/"
            className="flex max-xl:justify-center items-center gap-x-2"
          >
            <img width={57} height={51} src="Vector.png" alt="" />
            <img width={116} height={28} src="TRY2WIN.png" alt="" />
          </Link>
          <ul className="grid lg:grid-cols-5 grid-cols-2 text-center max-lg:gap-y-5 lg:gap-x-3">
            <li className="xl:text-lg text-base font-normal">
              <Link to={'/private'}>
                {selectedLanguage === 'ru'
                  ? 'Договор оферты'
                  : 'Terms of service'}
              </Link>
            </li>
            <li className="xl:text-lg text-base font-normal">
              <Link to={'/support'}>
                {selectedLanguage === 'ru' ? 'Поддержка' : 'Support'}
              </Link>
            </li>
            <li className="xl:text-lg text-base font-normal">
              <Link to={'/news'}>
                {selectedLanguage === 'ru' ? 'Новости' : 'News'}
              </Link>
            </li>
            <li className="xl:text-lg text-base font-normal">
              <Link to={'/'}>
                {selectedLanguage === 'ru' ? 'Главная' : 'Home'}
              </Link>
            </li>
            <li className="xl:text-lg text-base font-normal">
              <Link to={'/catalog'}>
                {selectedLanguage === 'ru' ? 'Каталог игр' : 'Games catalog'}
              </Link>
            </li>
          </ul>
          <div>
            <p className="text-xl">
              {selectedLanguage === 'ru' ? 'Мы принимаем' : 'We accept'}
            </p>
            <div className="flex  items-center gap-x-2">
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
