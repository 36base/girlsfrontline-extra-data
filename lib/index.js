"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _alias = _interopRequireDefault(require("../build/data/alias"));

var _getScript = _interopRequireDefault(require("./getScript"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gfextradata = function gfextradata(_ref) {
  var locale = _ref.locale;
  return {
    alias: _alias.default,
    script: (0, _getScript.default)(locale)
  };
};

var _default = gfextradata;
exports.default = _default;