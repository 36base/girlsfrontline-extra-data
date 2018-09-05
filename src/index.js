
const gfextradata = ({ locale }) => {
  switch (locale) {
    case 'en': {
      const characterScript = require('./../data/en/characterScript');
      const dollNickname = require('./../data/en/dollNickname');

      return { characterScript, dollNickname };
    }
    case 'ko': {
      const characterScript = require('./../data/ko/characterScript');
      const dollNickname = require('./../data/ko/dollNickname');

      return { characterScript, dollNickname };
    }
    case 'ja': {
      const characterScript = require('./../data/ja/characterScript');
      const dollNickname = require('./../data/ja/dollNickname');

      return { characterScript, dollNickname };
    }
  }
  return { };
} 

export default gfextradata;