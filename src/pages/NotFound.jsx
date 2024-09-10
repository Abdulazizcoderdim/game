import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import languageState from '../atom/languageAtom';

const NotFound = () => {
  const [selectedLanguage] = useRecoilState(languageState);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="w-full text-white space-y-10 h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl">
        {selectedLanguage === 'ru' ? 'Страница не найдена' : 'Page not found'}
      </h1>
      <button
        className="border-2 text-xl border-[#36FFF3] rounded-lg bg-[#05413D] py-1 px-4 shadow-[0_0_4px_1px_rgba(0,255,255,0.6)]"
        onClick={goBack}
      >
        {selectedLanguage === 'ru' ? 'Назад' : 'Back'}
      </button>
      <button
        className="border-2 text-xl border-[#36FFF3] rounded-lg bg-[#05413D] py-1 px-4 shadow-[0_0_4px_1px_rgba(0,255,255,0.6)]"
        onClick={() => navigate('/')}
      >
        {selectedLanguage === 'ru' ? 'На главную' : 'Home'}
      </button>
    </div>
  );
};

export default NotFound;
