import React from 'react';
import MaxWidth from '../components/MaxWidth';
import ScrollableImageGallery from '../components/ScrollableImageGallery ';

const Battlefield = () => {
  return (
    <div>
      <MaxWidth>
        {/* 1 chisi */}
        <div className="w-full text-white space-y-3 pt-24">
          <p className="font-extrabold md:text-[63px] text-5xl">
            BATTLEFIELD 4 <span className="text-[#61FFF5]">PROPHET</span>
          </p>
          <p className="text-[19px] font-semibold">
            ИГРА:{' '}
            <span className="text-[#61FFF5]">
              CALL OF DUTY MODERN WARFARE 3
            </span>
          </p>
        </div>
        {/* 2 chisi */}
        <div className="flex gap-10">
          <div
            style={{
              background:
                'linear-gradient(150.74deg, #17302E 8.29%, #48968F 189.21%)',
            }}
            className="border-2 border-[#5DFEF4] rounded-2xl shadow-xl p-5 w-full max-w-[840px]"
          >
            <div className="py-6 px-5 space-y-5 text-white border-[#5DFEF4] border-dashed border-2 w-full h-full border-b-0 rounded-2xl rounded-b-none">
              <div className="flex items-center justify-between">
                <h1 className="text-[28px] pl-5 font-extrabold">
                  PROPHET <span className="text-[#61FFF6]">CHEAT</span>
                </h1>
                <div className="flex items-center gap-x-3">
                  <button className="rounded-md text-shadow-custom px-3 py-1 border-2 border-[#18FB8E] text-[#18FB8E] drop-shadow-md">
                    UNDETECTED
                  </button>
                  <button className="rounded-md text-shadow-custom2 px-3 py-1 border-2 border-[#17F1FF] text-[#17F1FF] drop-shadow-md">
                    UNDETECTED
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-x-2">
                <ScrollableImageGallery />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-10 w-full max-w-[450px]">
            <div
              style={{
                background:
                  'linear-gradient(150.74deg, #17302E 8.29%, #48968F 189.21%)',
              }}
              className="border-2 border-[#5DFEF4] rounded-2xl shadow-xl p-5 w-full"
            >
              <div className="py-6 px-5 space-y-5 text-white border-[#5DFEF4] border-dashed border-2 w-full h-full border-b-0 rounded-2xl rounded-b-none"></div>
            </div>
            {/* 2 */}
            <div
              style={{
                background:
                  'linear-gradient(150.74deg, #17302E 8.29%, #48968F 189.21%)',
              }}
              className="border-2 border-[#5DFEF4] rounded-2xl shadow-xl p-5 w-full"
            >
              <div className="py-6 px-5 space-y-5 text-white border-[#5DFEF4] border-dashed border-2 w-full h-full border-b-0 rounded-2xl rounded-b-none"></div>
            </div>
          </div>
        </div>
      </MaxWidth>
    </div>
  );
};

export default Battlefield;
