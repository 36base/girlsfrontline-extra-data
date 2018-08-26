
const gfextradata = ({ locale }) => {
  switch (locale) {
    case 'en': {
      // not yet
      const characterScript = require('./../data/ko/characterScript');
      const dollNickname = require('./../data/ko/dollNickname');

      return { characterScript, dollNickname };
    }
    case 'ko': {
      const characterScript = require('./../data/ko/characterScript');
      const dollNickname = require('./../data/ko/dollNickname');

      return { characterScript, dollNickname };
    }
    case 'ja': {
      // not yet
      const characterScript = require('./../data/ko/characterScript');
      const dollNickname = require('./../data/ko/dollNickname');

      return { characterScript, dollNickname };
    }
  }
  return { };
} 

module.exports = gfextradata;