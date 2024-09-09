import React from 'react';
import MaxWidth from '../components/MaxWidth';

const PanelAdminstrator = () => {
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
          <div className="flex flex-col gap-y-5"></div>
          <div></div>
        </div>
      </MaxWidth>
    </div>
  );
};

const AddGame = () => {
  return <div>add game</div>;
};

const AddChat = () => {
  return <div>add chat</div>;
};

const EditGame = () => {
  return <div>edit game</div>;
};

const EditTags = () => {
  return <div>edit tags</div>;
};

export default PanelAdminstrator;
