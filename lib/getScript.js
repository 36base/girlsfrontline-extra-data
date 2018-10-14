"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _enUS = _interopRequireDefault(require("../build/data/script/en-US"));

var _jaJP = _interopRequireDefault(require("../build/data/script/ja-JP"));

var _koKR = _interopRequireDefault(require("../build/data/script/ko-KR"));

var _zhCN = _interopRequireDefault(require("../build/data/script/zh-CN"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getCharacterScript = function getCharacterScript(locale) {
  switch (locale) {
    case 'en-US':
      return _enUS.default;

    case 'ja-JP':
      return _jaJP.default;

    case 'ko-KR':
      return _koKR.default;

    case 'zh-CN':
      return _zhCN.default;

    default:
      return {};
  }
};

var _default = getCharacterScript;
exports.default = _default;