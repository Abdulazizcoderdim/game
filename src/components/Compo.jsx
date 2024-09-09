import React from 'react';

const Compo = ({ icon, title, brend }) => {
  return (
    <div
      style={{
        background:
          'linear-gradient(150.74deg, #17302E 8.29%, #48968F 189.21%)',
      }}
      className="border-2 box-sh border-[#5DFEF4] rounded-2xl shadow-xl p-2 md:min-w-[350px] max-sm:w-full"
    >
      <div className="py-6 px-5 space-y-7 text-white border-[#5DFEF4] border-dashed border-2 w-full h-full border-b-0 rounded-2xl rounded-b-none">
        <div className="flex items-center gap-x-3">
          <img width={52} height={52} src={icon} alt="" />
          <p className="text-[13px] font-semibold">
            {title} <br /> {brend}
          </p>
        </div>
        <button className="bg-[#4CB4AD] font-semibold text-base w-full py-1 rounded-lg">
          Скачать
        </button>
      </div>
    </div>
  );
};

export default Compo;
