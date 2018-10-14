
import en from '../build/data/script/en-US';
import ja from '../build/data/script/ja-JP';
import ko from '../build/data/script/ko-KR';
import zh from '../build/data/script/zh-CN';

const getCharacterScript = (locale) => {
  switch (locale) {
    case 'en-US': return en;
    case 'ja-JP': return ja;
    case 'ko-KR': return ko;
    case 'zh-CN': return zh;
    default: return {};
  }
};

export default getCharacterScript;
