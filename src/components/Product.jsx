import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import languageState from '../atom/languageAtom';

export default function Product() {
  const [selectedLanguage] = useRecoilState(languageState);

  const products =
    selectedLanguage === 'ru'
      ? [
          { name: 'Товар 1', period: '1 день' },
          { name: 'Товар 2', period: '1 неделя' },
          { name: 'Товар 3', period: '1 месяц' },
          { name: 'Товар 4', period: '1 год' },
        ]
      : [
          { name: 'Product 1', period: '1 day' },
          { name: 'Product 2', period: '1 week' },
          { name: 'Product 3', period: '1 month' },
          { name: 'Product 4', period: '1 year' },
        ];

  const [amounts, setAmounts] = useState(Array(products.length).fill(''));

  const handleAmountChange = (index, value) => {
    const newAmounts = [...amounts];
    newAmounts[index] = value;
    setAmounts(newAmounts);
  };

  return (
    <>
      {products.map((product, index) => (
        <div key={index} className="mb-4 grid md:grid-cols-4 grid-cols-2 gap-2">
          <div className="bg-[#22524E] border-2 border-[#60D1C7] box-sh text-white p-2 rounded-md flex justify-between items-center">
            {product.name}
            <button className="text-teal-300 font-medium text-base hover:text-teal-100">
              <X size={16} />
            </button>
          </div>
          <div className="bg-[#17302E] border-2 border-[#3C7D77] box-sh text-white p-2 rounded flex justify-between items-center">
            <ChevronLeft size={16} className="text-teal-300 cursor-pointer" />
            <span>{product.period}</span>
            <ChevronRight size={16} className="text-teal-300 cursor-pointer" />
          </div>
          <input
            type="text"
            placeholder={
              selectedLanguage === 'ru' ? 'Укажите сумму' : 'Enter amount'
            }
            value={amounts[index]}
            onChange={e => handleAmountChange(index, e.target.value)}
            className="bg-[#17302E] border-2 border-[#3C7D77] box-sh text-white p-2 rounded text-base font-medium placeholder:text-white w-full"
          />
          <button className="bg-[#17302E] border-2 border-[#3C7D77] box-sh p-2 rounded text-base font-medium hover:bg-teal-800 transition-colors">
            {selectedLanguage === 'ru'
              ? 'Ссылка на digiseller'
              : 'Link to digiseller'}
          </button>
        </div>
      ))}
    </>
  );
}
