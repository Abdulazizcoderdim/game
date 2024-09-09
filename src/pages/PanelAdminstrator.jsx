import React, { useState } from 'react';
import MaxWidth from '../components/MaxWidth';
import AddChat from '../components/AddChat';
import AddGame from '../components/AddGame';
import EditGame from '../components/EditGame';
import EditTags from '../components/EditTags';

const PanelAdminstrator = () => {
  const [active, setActive] = useState(1);
  const catalogItems = [
    'Добавить игру',
    'Добавить чит',
    'Редактировать',
    'Редактировать теги',
  ];
  const dropdownItems = [<AddGame />, <AddChat />, <EditGame />, <EditTags />];
  return (
    <div className="pt-20">
      <MaxWidth className="text-white">
        <h1 className="font-extrabold text-4xl">
          ПАНЕЛЬ <span className="text-[#5CFFF5]">АДМИНИСТРАТОРА</span>
        </h1>

        <div className="mt-10 flex gap-x-5">
          <div className="flex flex-col gap-y-3">
            {catalogItems.map((item, i) => {
              const isActive = i === active;
              return (
                <div
                  onClick={() => setActive(i)}
                  key={i}
                  className={`bg-[#17302E] ${
                    isActive
                      ? 'border-[#5DFFF5] text-white backround-color'
                      : 'border-[#3C7D77]'
                  } min-w-[400px] cursor-pointer text-center px-5 text-[#3C7D77] rounded-lg py-4 border-2 `}
                >
                  <p className="font-extrabold text-xl">{item}</p>
                </div>
              );
            })}
          </div>
          <div className="max-w-[2578px] w-full">{dropdownItems[Number(active)]}</div>
        </div>
      </MaxWidth>
    </div>
  );
};


export default PanelAdminstrator;
