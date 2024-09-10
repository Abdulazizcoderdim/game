import { atom } from 'recoil';

const languageState = atom({
  key: 'languageState',
  default: 'ru',
});
export default languageState;
