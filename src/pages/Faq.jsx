import React from 'react';
import { useRecoilState } from 'recoil';
import languageState from '../atom/languageAtom';
import Compo from '../components/Compo';
import MaxWidth from '../components/MaxWidth';

const Faq = () => {
  const [selectedLanguage] = useRecoilState(languageState);

  return (
    <div className="pb-20">
      <div className="w-full text-center text-white space-y-3 pt-24">
        <p className="font-extrabold md:text-[63px] sm:text-5xl text-3xl">
          {selectedLanguage === 'ru' ? (
            <>
              FAQ <span className="text-[#61FFF5]">&</span> ПОДДЕРЖКА
            </>
          ) : (
            <>
              FAQ <span className="text-[#61FFF5]">&</span> SUPPORT
            </>
          )}
        </p>
        <p className="text-[19px] font-semibold">
          {selectedLanguage === 'ru'
            ? 'Обязательно обновите и скачайте все драйвера и необходимые программы'
            : 'Update and download all driver and necessary programs'}
        </p>
      </div>
      <MaxWidth className="space-y-10">
        <div>
          <div className="text-white mt-8">
            <p className="flex items-center gap-x-4 md:text-[26px] max-sm:text-sm text-xl font-bold">
              <img
                width={59}
                height={59}
                className="max-sm:w-8 max-sm:h-8"
                src="nast.png"
                alt=""
              />
              {selectedLanguage === 'ru' ? 'Необходимые' : 'Required'}
              <span className="text-[#61FFF5]">
                {' '}
                {selectedLanguage === 'ru' ? 'компоненты' : 'components'}
              </span>
            </p>
          </div>
          <div className="flex flex-wrap gap-x-10 gap-y-14 mt-10">
            <Compo
              title={
                selectedLanguage === 'ru'
                  ? 'ПАКЕТ С КОМПОНЕНТАМИ:'
                  : 'PACKAGE WITH COMPONENTS:'
              }
              icon={'AMD.png'}
              brend={'AMD'}
            />
            <Compo
              title={
                selectedLanguage === 'ru'
                  ? 'ПАКЕТ С КОМПОНЕНТАМИ:'
                  : 'PACKAGE WITH COMPONENTS:'
              }
              icon={'NVIDIA.png'}
              brend={'NVIDIA'}
            />
            <Compo
              title={
                selectedLanguage === 'ru'
                  ? 'ПАКЕТ С КОМПОНЕНТАМИ:'
                  : 'PACKAGE WITH COMPONENTS:'
              }
              icon={'vs.png'}
              brend={'Microsoft Visual C++ 2005-2019'}
            />
            <Compo
              title={
                selectedLanguage === 'ru'
                  ? 'ПАКЕТ С КОМПОНЕНТАМИ:'
                  : 'PACKAGE WITH COMPONENTS:'
              }
              icon={'X.png'}
              brend={'Directx 12'}
            />
            <Compo
              title={
                selectedLanguage === 'ru'
                  ? 'ПАКЕТ С КОМПОНЕНТАМИ:'
                  : 'PACKAGE WITH COMPONENTS:'
              }
              icon={'net.png'}
              brend={'Microsoft Net Framework 4.7.1'}
            />
          </div>
        </div>
        <div>
          <div className="text-white mt-8">
            <p className="flex items-center gap-x-4 md:text-[26px] max-sm:text-sm text-xl font-bold">
              <img
                className="max-sm:w-8 max-sm:h-8"
                width={59}
                height={59}
                src="mac.png"
                alt=""
              />
              {selectedLanguage === 'ru' ? (
                <>
                  Дополнительные{' '}
                  <span className="text-[#61FFF5]">параметры</span>
                </>
              ) : (
                <>
                  Additional <span className="text-[#61FFF5]">options</span>{' '}
                </>
              )}
            </p>
          </div>
          <div className="flex flex-wrap gap-x-10 gap-y-14 mt-10">
            <Compo
              title={selectedLanguage === 'ru' ? 'Авто выключение' : 'Auto off'}
              icon={'s.png'}
              brend={'Windows Smart Screen'}
            />
            <Compo
              title={selectedLanguage === 'ru' ? 'Авто выключение' : 'Auto off'}
              icon={'NVIDIA.png'}
              brend={'Windows Defender'}
            />
            <Compo
              title={selectedLanguage === 'ru' ? 'Авто выключение' : 'Auto off'}
              icon={'sh.png'}
              brend={'UAC (Контроль учетных записей)'}
            />
          </div>
        </div>
        <div>
          <div className="text-white mt-8">
            <p className="flex items-center gap-x-4 max-sm:text-sm md:text-[26px] text-xl font-bold">
              <img
                className="max-sm:w-8 max-sm:h-8"
                width={59}
                height={59}
                src="c.png"
                alt=""
              />
              {selectedLanguage === 'ru' ? (
                <>
                  Вспомогательные{' '}
                  <span className="text-[#61FFF5]">программы</span>
                </>
              ) : (
                <>
                  Additional <span className="text-[#61FFF5]">options</span>{' '}
                </>
              )}
            </p>
          </div>
          <div className="flex flex-wrap gap-x-10 gap-y-14 mt-10">
            <Compo
              title={
                selectedLanguage === 'ru'
                  ? 'Программа удаленного доступа'
                  : 'Remote Desktop program'
              }
              icon={'c1.png'}
              brend={'AnyDesk '}
            />
            <Compo
              title={
                selectedLanguage === 'ru'
                  ? 'Арихиватор WinRAR'
                  : 'Archiver WinRAR'
              }
              icon={'c2.png'}
            />
          </div>
        </div>
        <div>
          <div className="text-white mt-8">
            <p className="flex items-center gap-x-4 max-sm:text-base md:text-[26px] text-xl font-bold">
              <img
                className="max-sm:w-8 max-sm:h-8"
                width={59}
                height={59}
                src="sup.png"
                alt=""
              />
              {selectedLanguage === 'ru' ? (
                <>
                  Техническая <span className="text-[#61FFF5]">поддержка</span>
                </>
              ) : (
                <>
                  Technical <span className="text-[#61FFF5]">support</span>
                </>
              )}
            </p>
          </div>
          <div className="flex flex-wrap gap-x-10 gap-y-14 mt-10">
            <div
              style={{
                background:
                  'linear-gradient(150.74deg, #17302E 8.29%, #48968F 189.21%)',
              }}
              className="border-2 box-sh border-[#5DFEF4] rounded-2xl shadow-xl p-2 md:min-w-[350px] max-sm:w-full"
            >
              <div className="py-6 px-5 space-y-7 text-white border-[#5DFEF4] border-dashed border-2 w-full h-full border-b-0 rounded-2xl rounded-b-none">
                <div className="flex items-center gap-x-3">
                  <p className="text-[13px] text-center w-full font-semibold">
                    {selectedLanguage === 'ru' ? (
                      <>
                        Вы не нашли решение? <br />
                        Обратитесь к службе поддержки
                      </>
                    ) : (
                      <>
                        Are you looking for a solution? <br />
                        Contact the support
                      </>
                    )}
                  </p>
                </div>
                <button className="bg-[#4CB4AD] font-semibold text-base w-full py-1 rounded-lg">
                  {selectedLanguage === 'ru' ? 'Техподдержка' : 'Support'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </MaxWidth>
    </div>
  );
};

export default Faq;
