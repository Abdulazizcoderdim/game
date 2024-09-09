import { useState } from 'react';

export default function ChearForm() {
  const [russianInput, setRussianInput] = useState('');
  const [englishInput, setEnglishInput] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  const handleAddCheat = () => {
    // Add cheat logic here
    console.log('Adding cheat:', { russianInput, englishInput });
  };

  const handleClearFields = () => {
    setRussianInput('');
    setEnglishInput('');
    setIsLoaded(false);
  };

  const handleLoad = () => {
    // Load logic here
    setIsLoaded(true);
  };

  return (
    <div className="">
      <div className="space-y-4">
        <div className="flex flex-col gap-3 md:min-w-[696px]">
          <input
            placeholder="Укажите компоненты либо устройства"
            value={russianInput}
            onChange={e => setRussianInput(e.target.value)}
            className="bg-[#17302E] outline-none placeholder:text-white border-2 p-2 max-w-[600px] rounded-lg font-medium sm:text-base text-sm border-[#3C7D77] box-sh"
          />
          <input
            placeholder="Specify components or devices"
            value={englishInput}
            onChange={e => setEnglishInput(e.target.value)}
            className="bg-[#17302E] outline-none placeholder:text-white border-2 p-2 max-w-[600px] rounded-lg font-medium sm:text-base text-sm border-[#3C7D77] box-sh"
          />
        </div>
        <div className="flex max-md:flex-col gap-5">
          <div className="flex max-sm:flex-col max-sm:space-y-3 sm:space-x-2 w-full">
            <button
              onClick={handleAddCheat}
              className="bg-[#4C8EB4] w-full px-4 py-2 rounded-lg hover:bg-blue-600 text-white flex-grow"
            >
              Добавить чит
            </button>
            <button
              onClick={handleClearFields}
              className="bg-[#B4594C] w-full px-5 py-2 rounded-lg hover:bg-red-600 text-white flex-grow"
            >
              Очистить все поле
            </button>
          </div>
          <button
            onClick={handleLoad}
            className={`w-full rounded-lg font-medium py-2 text-base ${
              isLoaded
                ? 'bg-[#18312F] text-[#71FF6F] hover:bg-gray-800'
                : 'bg-[#18312F] '
            } text-white`}
          >
            {isLoaded ? 'Успешно загруженно' : 'Загрузить'}
          </button>
        </div>
      </div>
    </div>
  );
}
