import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import languageState from '../atom/languageAtom';
import GameCard from '../components/GameCard';
import GameCard2 from '../components/GameCard2';
import GameCard3 from '../components/GameCard3';
import MaxWidth from '../components/MaxWidth';
import ScrollableImageGallery from '../components/ScrollableImageGallery ';

const Battlefield = () => {
  const [selectedLanguage] = useRecoilState(languageState);
  const functionChit =
    selectedLanguage === 'ru'
      ? [
          {
            name: 'AIM-BOT',
          },
          {
            name: 'ESP',
          },
          {
            name: 'RAPID-FIRE',
          },
          {
            name: 'CHAMS',
          },
          {
            name: 'BUNNY-HOP',
          },
          {
            name: 'SKIN-CHANGER',
          },
          {
            name: 'SILENT-AIM',
          },
          {
            name: 'MAP-HACK',
          },
        ]
      : [
          {
            name: 'AIM-BOT',
          },
          {
            name: 'ESP',
          },
          {
            name: 'RAPID-FIRE',
          },
          {
            name: 'CHAMS',
          },
          {
            name: 'BUNNY-HOP',
          },
          {
            name: 'SKIN-CHANGER',
          },
          {
            name: 'SILENT-AIM',
          },
          {
            name: 'MAP-HACK',
          },
        ];

  const zakazData =
    selectedLanguage === 'ru'
      ? [
          {
            day: '1',
            money: '620₽',
          },
          {
            day: '2',
            money: '920₽',
          },
          {
            day: '7',
            money: '1190₽',
          },
          {
            day: '14',
            money: '1190₽',
          },
        ]
      : [
          {
            day: '1',
            money: '620₽',
          },
          {
            day: '2',
            money: '920₽',
          },
          {
            day: '7',
            money: '1190₽',
          },
          {
            day: '14',
            money: '1190₽',
          },
        ];

  const settingsInfo =
    selectedLanguage === 'ru'
      ? [
          {
            icon: 'str.png',
            title: 'Игровой клиент:',
            name: 'Steam',
          },
          {
            icon: 'pr.png',
            title: 'Поддерживаемые процессоры:',
            name: 'Intel, Amd',
          },
          {
            icon: 'win.png',
            title: 'Поддерживаемые OCs:',
            name: 'Windows 10 (21H1-22H2) Windows 11 все версии',
          },
          {
            icon: 'n.png',
            title: 'Спуфер:',
            name: 'Нет',
          },
          {
            icon: 'sh.png',
            title: 'Античит:',
            name: 'Ricochet',
          },
          {
            icon: 'wc.png',
            title: 'Режим окна:',
            name: 'Все',
          },
        ]
      : [
          {
            icon: 'str.png',
            title: 'Game client:',
            name: 'Steam',
          },
          {
            icon: 'pr.png',
            title: 'Supported processors:',
            name: 'Intel, Amd',
          },
          {
            icon: 'win.png',
            title: 'Supported OS:',
            name: 'Windows 10 (21H1-22H2) Windows 11 all versions',
          },
          {
            icon: 'n.png',
            title: 'Spoofer:',
            name: 'No',
          },
          {
            icon: 'sh.png',
            title: 'Anti-cheat:',
            name: 'Ricochet',
          },
          {
            icon: 'wc.png',
            title: 'Window mode:',
            name: 'All',
          },
        ];

  const [active, setActive] = useState('AIM-BOT');
  const [zakaz, setZakaz] = useState(0);
  return (
    <div className="pb-20">
      <MaxWidth>
        {/* 1 chisi */}
        <div className="w-full text-start text-white space-y-3 pt-24">
          <p className="font-extrabold md:text-[63px] sm:text-5xl text-xl">
            {selectedLanguage === 'ru' ? (
              <>
                БАТЛЕФОН <span className="text-[#61FFF5]">4</span> PROPHET
              </>
            ) : (
              <>
                BATTLEFIELD <span className="text-[#61FFF5]">4</span> PROPHET
              </>
            )}
          </p>
          <p className="sm:text-[19px] text-base font-semibold">
            {selectedLanguage === 'ru' ? (
              <>
                ИГРА: <span className="text-[#61FFF5]">MODERN WARFARE 3</span>
              </>
            ) : (
              <>
                GAME:
                <span className="text-[#61FFF5]">
                  CALL OF DUTY MODERN WARFARE 3
                </span>
              </>
            )}
          </p>
        </div>
        {/* 2 chisi */}
        <div className="flex max-lg:flex-col justify-center gap-10 mt-7">
          <div
            style={{
              background:
                'linear-gradient(150.74deg, #17302E 8.29%, #48968F 189.21%)',
            }}
            className="border-2 box-sh border-[#5DFEF4] rounded-2xl shadow-xl p-5 w-full max-w-[840px]"
          >
            <div className="py-6 px-5 space-y-5 text-white border-[#5DFEF4] border-dashed border-2 w-full h-full border-b-0 rounded-2xl rounded-b-none">
              {/* 1 */}
              <div className="flex max-sm:flex-col items-center justify-between">
                <h1 className="md:text-[28px] text-lg pl-5 font-extrabold">
                  {selectedLanguage === 'ru' ? (
                    <>
                      ПРОФЕССИОНАЛ <span className="text-[#61FFF6]">CHEAT</span>
                    </>
                  ) : (
                    <>
                      PROPHET <span className="text-[#61FFF6]">CHEAT</span>
                    </>
                  )}
                </h1>
                <div className="flex items-center max-sm:flex-col max-sm:space-y-3 gap-x-3">
                  <button className="rounded-md max-sm:text-sm text-shadow-custom px-3 py-1 border-2 border-[#18FB8E] text-[#18FB8E] drop-shadow-md">
                    {selectedLanguage === 'ru' ? 'ОБНОВЛЕН' : 'UNDETECTED'}
                  </button>
                  <button className="rounded-md max-sm:text-sm text-shadow-custom2 px-3 py-1 border-2 border-[#17F1FF] text-[#17F1FF] drop-shadow-md">
                    {selectedLanguage === 'ru' ? 'ОБНОВЛЕН' : 'UNDETECTED'}
                  </button>
                </div>
              </div>

              {/* 2 */}
              <ScrollableImageGallery />

              {/* 3 */}
              <div className="space-y-5">
                <h1 className="font-extrabold sm:text-[23px] text-base">
                  {selectedLanguage === 'ru' ? (
                    <>
                      ФУНКЦИИ <span className="text-[#5DF6EC]">ЧИТА</span>
                    </>
                  ) : (
                    <>
                      FUNCTIONS <span className="text-[#5DF6EC]">CHEAT</span>
                    </>
                  )}
                </h1>
                <div className="flex items-center gap-3 flex-wrap">
                  {functionChit.map((item, i) => {
                    const isActive = active === item.name;
                    return (
                      <button
                        onClick={() => setActive(item.name)}
                        key={i}
                        className={`${
                          (' text-sm font-bold border-2',
                          isActive
                            ? 'border-[#36FFF3] border-2 rounded-lg bg-[#05413D] px-5 py-2 shadow-[0_0_4px_1px_rgba(0,255,255,0.6)]'
                            : 'px-5 py-2 border-2 border-[#2C7B73] text-[#2C7B73] bg-[#0B1F1D] rounded-lg')
                        } `}
                      >
                        {item.name}
                      </button>
                    );
                  })}
                </div>

                <div className="border-2 box-sh text-white bg-[#17302E] shadow-2xl border-[#36FFF3] rounded-lg p-5">
                  <div className="space-y-4">
                    <h1 className="sm:text-[21px] text-base font-bold">
                      {selectedLanguage === 'ru' ? 'ФУНКЦИЯ:' : 'FUNCTION:'}{' '}
                      <span className="text-[#5DF6EC]">{active}</span>
                    </h1>
                    <ul className="space-y-3">
                      <li className="md:text-lg sm:text-sm text-base flex items-center gap-x-2 font-semibold">
                        <img width={18} height={18} src="re.png" alt="" />
                        {selectedLanguage === 'ru'
                          ? 'Прицел Включить'
                          : 'Aim Enable'}
                      </li>
                      <li className="md:text-lg sm:text-sm text-base flex items-center gap-x-2 font-semibold">
                        <img width={18} height={18} src="re.png" alt="" />
                        {selectedLanguage === 'ru' ? (
                          <>
                            Селектор костей <br className="sm:hidden" />{' '}
                            (Голова/Шея/Грудь <br className="sm:hidden" />{' '}
                            /Руки/Ноги)
                          </>
                        ) : (
                          <>
                            Bone Selector <br className="sm:hidden" />{' '}
                            (Head/Neck/Chest <br className="sm:hidden" />{' '}
                            /Arms/Legs)
                          </>
                        )}
                      </li>
                      <li className="md:text-lg sm:text-sm text-base flex items-center gap-x-2 font-semibold">
                        <img width={18} height={18} src="re.png" alt="" />
                        {selectedLanguage === 'ru'
                          ? 'Прицел Отключить'
                          : 'Silent Aim'}
                      </li>
                      <li className="md:text-lg sm:text-sm text-base flex items-center gap-x-2 font-semibold">
                        <img width={18} height={18} src="re.png" alt="" />
                        {selectedLanguage === 'ru'
                          ? 'Автовыстрел'
                          : 'Auto Fire'}
                      </li>
                    </ul>
                  </div>
                </div>
                <h1 className="font-extrabold text-[23px]">
                  {selectedLanguage === 'ru' ? (
                    <>
                      ОПИСАНИЕ <span className="text-[#5DF6EC]">ЧИТА</span>
                    </>
                  ) : (
                    <>
                      DESCRIPTION <span className="text-[#5DF6EC]">CHEAT</span>
                    </>
                  )}
                </h1>
                <div className="border-2 box-sh text-white bg-[#17302E] shadow-2xl border-[#36FFF3] rounded-lg p-5">
                  <div className="space-y-4">
                    <p className="text-[15px] font-medium">
                      {selectedLanguage === 'ru' ? (
                        <>
                          Чит Ring-1 на игру Destiny 2, зарекомендовал себя
                          наилучшим образом среди игроков, чит имеет хорошею
                          оптимизацию, красивый визуальный вид и имеет обширный
                          функционал из которого можно выделать следующее
                          функции:
                        </>
                      ) : (
                        <>
                          Ring-1 is one of the best cheats in Destiny 2. It was
                          developed by the best player in the game. It has good
                          optimization, beautiful visual, and has a wide
                          function from which you can select the next one:
                        </>
                      )}
                    </p>
                  </div>
                </div>
                <h1 className="font-extrabold text-[23px]">
                  {selectedLanguage === 'ru' ? (
                    <>
                      ОБЯЗАТЕЛЬНО ДЛЯ
                      <span className="text-[#5DF6EC]">ЧИТА</span>
                    </>
                  ) : (
                    <>
                      REQUIRED FOR <span className="text-[#5DF6EC]">CHEAT</span>
                    </>
                  )}
                </h1>
                <div className="border-2 box-sh text-white bg-[#17302E] shadow-2xl border-[#36FFF3] rounded-lg p-5">
                  <div className="flex max-sm:flex-col items-center sm:gap-x-2">
                    <img src="usb.png" alt="" />
                    <p className="font-bold text-[19px]">
                      {selectedLanguage === 'ru'
                        ? 'Для работы чита, вам понадобиться флешка'
                        : 'To use the cheat, you need a flash drive'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-10 w-full max-w-[450px]">
            {/* 1 */}
            <div
              style={{
                background:
                  'linear-gradient(150.74deg, #17302E 8.29%, #48968F 189.21%)',
              }}
              className="border-2 box-sh border-[#5DFEF4] rounded-2xl shadow-xl p-5 w-full h-full"
            >
              <div className="py-6 px-5 space-y-5 text-white border-[#5DFEF4] border-dashed border-2 w-full h-full border-b-0 rounded-2xl rounded-b-none">
                <div className="text-white space-y-5">
                  <h1 className="text-[23px] font-extrabold">
                    {selectedLanguage === 'ru' ? (
                      <>
                        ОФОРМЛЕНИЕ{' '}
                        <span className="text-[#61FFF5]">ЗАКАЗА</span>
                      </>
                    ) : (
                      <>
                        ORDERING <span className="text-[#61FFF5]">ORDER</span>
                      </>
                    )}
                  </h1>
                  <p className="text-[14px] font-normal">
                    {selectedLanguage === 'ru'
                      ? 'Выберите удобный тарифный план для покупки продукта'
                      : 'Choose a convenient plan for the purchase of the product'}
                  </p>

                  <div className="pt-5 space-y-7">
                    {zakazData.map((item, i) => {
                      const isActive = i === zakaz;
                      return (
                        <div
                          onClick={() => setZakaz(i)}
                          key={i}
                          className={`flex ${
                            isActive
                              ? 'bg-[#448D86] border-[#61FFF5]'
                              : 'border-[#2C7B73] bg-[#0B1F1D] text-[#2C7B73]'
                          }  border-2  rounded-lg cursor-pointer justify-between items-center px-5 py-3 `}
                        >
                          <p className="flex font-semibold text-[15px] items-center gap-x-2">
                            <div
                              className={`w-[22px] h-[22px] flex items-center justify-center rounded-full border-2 ${
                                isActive ? 'border-white' : 'border-[#2C7B73]'
                              } `}
                            >
                              <div
                                className={`w-[15px] h-[13.5px] ${
                                  isActive ? 'bg-white' : ''
                                } rounded-full`}
                              />
                            </div>
                            {item.day} день
                          </p>
                          <p className="text-[19px] font-bold text-white">
                            {item.money}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex max-sm:flex-col max-sm:gap-3 justify-between items-center">
                    <h1 className="font-bold text-4xl">2200₽</h1>
                    <button className="font-semibold text-base rounded-lg bg-[#4CB4AD] px-6 py-2">
                      {selectedLanguage === 'ru'
                        ? 'Перейти к оплате'
                        : 'Go to pay'}
                    </button>
                  </div>

                  <div className="flex items-center gap-x-3">
                    <input type="checkbox" />
                    <p className="font-light text-sm">
                      {selectedLanguage === 'ru' ? (
                        <>
                          Я согласен c{' '}
                          <Link to={'#'} className="underline">
                            пользовательским r=
                            <br /> соглашением
                          </Link>
                        </>
                      ) : (
                        <>
                          I agree with the{' '}
                          <Link to={'#'} className="underline">
                            user agreement
                          </Link>
                        </>
                      )}
                    </p>
                  </div>

                  <div className="flex max-sm:flex-col max-sm:gap-2 justify-between items-center">
                    <div className="flex max-sm:w-full items-center gap-x-4">
                      <img src="mw.png" width={31} height={31} alt="" />
                      <p className="text-sm font-light">
                        {selectedLanguage === 'ru' ? (
                          <>
                            Есть вопросили <br /> проблема?
                          </>
                        ) : (
                          <>
                            Have a <br /> problem?
                          </>
                        )}
                      </p>
                    </div>

                    <button className="font-semibold max-sm:w-full text-base rounded-lg bg-[#4CB4AD] px-6 py-2">
                      {selectedLanguage === 'ru' ? 'Поддержка' : 'Support'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div
              style={{
                background:
                  'linear-gradient(150.74deg, #17302E 8.29%, #48968F 189.21%)',
              }}
              className="border-2 box-sh border-[#5DFEF4] rounded-2xl shadow-xl p-5 w-full"
            >
              <div className="py-6 px-5 space-y-5 text-white border-[#5DFEF4] border-dashed border-2 w-full h-full border-b-0 rounded-2xl rounded-b-none">
                <div className="space-y-5">
                  {settingsInfo.map(item => (
                    <div key={item.name} className="flex items-center gap-x-4">
                      <img width={43} height={43} src={item.icon} alt="" />
                      <div className="">
                        <p className="font-medium  sm:text-lg text-base leading-5 text-white/45">
                          {item.title}
                        </p>
                        <p className="font-bold text-lg">{item.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 3 chisi */}
        <div className="text-white mt-20">
          <div className="space-y-4">
            <h1 className="font-extrabold md:text-[43px] text-3xl">
              {selectedLanguage === 'ru' ? (
                <>
                  <span className="text-[#5DFFF5]">РЕКОМЕНДАЦИЯ</span> ОТ НАС
                </>
              ) : (
                <>
                  <span className="text-[#5DFFF5]">RECOMMENDATION</span> FROM US
                </>
              )}
            </h1>
            <p className="md:text-[23px] text-lg font-normal">
              {selectedLanguage === 'ru' ? (
                <>
                  Более 500 читов на различные игры и мы подобрали для <br />{' '}
                  вас самые популярные игры
                </>
              ) : (
                <>
                  More than 500 readers on different games and we have found{' '}
                  <br />
                  for you the most popular games
                </>
              )}
            </p>
          </div>

          <div className="mt-14">
            <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
              <GameCard isNew={true} top={true} hot={true} rate={false} />
              <GameCard2 hot={true} />
              <GameCard3 rate={true} top={true} />
              <GameCard3 rate={true} top={true} />
              <GameCard isNew={true} top={true} hot={true} rate={false} />
              <GameCard2 hot={true} />
              <GameCard3 rate={true} top={true} />
              <GameCard3 rate={true} top={true} />
            </div>
          </div>
        </div>
      </MaxWidth>
    </div>
  );
};

export default Battlefield;
