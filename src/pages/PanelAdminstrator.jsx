import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import languageState from '../atom/languageAtom';
import AddChat from '../components/AddChat';
import AddGame from '../components/AddGame';
import EditGame from '../components/EditGame';
import EditTags from '../components/EditTags';
import MaxWidth from '../components/MaxWidth';

const PanelAdminstrator = () => {
  const [active, setActive] = useState(1);
  const [selectedLanguage] = useRecoilState(languageState);

  // const catalogItems = [
  //   'Добавить игру',
  //   'Добавить чит',
  //   'Редактировать',
  //   'Редактировать теги',
  // ];
  const catalogItems =
    selectedLanguage === 'ru'
      ? ['Добавить игру', 'Добавить чит', 'Редактировать', 'Редактировать теги']
      : ['Add game', 'Add chat', 'Edit', 'Edit tags'];

  const dropdownItems = [<AddGame />, <AddChat />, <EditGame />, <EditTags />];
  return (
    <div className="pt-20">
      <MaxWidth className="text-white">
        <h1 className="font-extrabold md:text-4xl text-xl">
          {selectedLanguage === 'ru' ? (
            <>
              ПАНЕЛЬ <span className="text-[#5CFFF5]">АДМИНИСТРАТОРА</span>
            </>
          ) : (
            <>
              ADMIN <span className="text-[#5CFFF5]">PANEL</span>
            </>
          )}
        </h1>

        <div className="mt-10 flex max-xl:flex-col max-xl:space-y-10 gap-x-5">
          <div className="flex flex-col gap-y-5">
            {catalogItems.map((item, i) => {
              const isActive = i === active;
              return (
                <div
                  onClick={() => setActive(i)}
                  key={i}
                  className={`bg-[#17302E] box-sh ${
                    isActive
                      ? 'border-[#5DFFF5] text-white backround-color'
                      : 'border-[#3C7D77]'
                  } min-w-[250px] max-w-[250px] cursor-pointer text-center px-5 text-[#3C7D77] rounded-lg py-4 border-2 `}
                >
                  <p className="font-extrabold text-xl">{item}</p>
                </div>
              );
            })}
          </div>
          <div className="max-w-[2578px] w-full">
            {dropdownItems[Number(active)]}
          </div>
        </div>
      </MaxWidth>
    </div>
  );
};

export default PanelAdminstrator;
