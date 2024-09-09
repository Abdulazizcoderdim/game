import React from 'react';
import Compo from '../components/Compo';
import MaxWidth from '../components/MaxWidth';

const Faq = () => {
  return (
    <div className="pb-20">
      <div className="w-full text-center text-white space-y-3 pt-24">
        <p className="font-extrabold md:text-[63px] sm:text-5xl text-3xl">
          FAQ <span className="text-[#61FFF5]">&</span> ПОДДЕРЖКА
        </p>
        <p className="text-[19px] font-semibold">
          Обязательно обновите и скачайте все драйвера и необходимые программы
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
              Необходимые
              <span className="text-[#61FFF5]"> компоненты</span>
            </p>
          </div>
          <div className="flex flex-wrap gap-x-10 gap-y-14 mt-10">
            <Compo
              title={'ПАКЕТ С КОМПОНЕНТАМИ:'}
              icon={'AMD.png'}
              brend={'AMD'}
            />
            <Compo
              title={'ПАКЕТ С КОМПОНЕНТАМИ:'}
              icon={'NVIDIA.png'}
              brend={'NVIDIA'}
            />
            <Compo
              title={'ПАКЕТ С КОМПОНЕНТАМИ:'}
              icon={'vs.png'}
              brend={'Microsoft Visual C++ 2005-2019'}
            />
            <Compo
              title={'ПАКЕТ С КОМПОНЕНТАМИ:'}
              icon={'X.png'}
              brend={'Directx 12'}
            />
            <Compo
              title={'ПАКЕТ С КОМПОНЕНТАМИ:'}
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
              Дополнительные <span className="text-[#61FFF5]">параметры</span>
            </p>
          </div>
          <div className="flex flex-wrap gap-x-10 gap-y-14 mt-10">
            <Compo
              title={'Авто выключение'}
              icon={'s.png'}
              brend={'Windows Smart Screen'}
            />
            <Compo
              title={'Авто выключение'}
              icon={'NVIDIA.png'}
              brend={'Windows Defender'}
            />
            <Compo
              title={'Авто выключение'}
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
              Вспомогательные <span className="text-[#61FFF5]">программы</span>
            </p>
          </div>
          <div className="flex flex-wrap gap-x-10 gap-y-14 mt-10">
            <Compo
              title={'Программа удаленного доступа'}
              icon={'c1.png'}
              brend={'AnyDesk '}
            />
            <Compo title={'Арихиватор WinRAR'} icon={'c2.png'} />
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
              Техническая <span className="text-[#61FFF5]">поддержка</span>
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
                    Вы не нашли решение? <br />
                    Обратитесь к службе поддержки
                  </p>
                </div>
                <button className="bg-[#4CB4AD] font-semibold text-base w-full py-1 rounded-lg">
                  Техподдержка
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
