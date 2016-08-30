'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign2 = require('lodash/assign');

var _assign3 = _interopRequireDefault(_assign2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (defaultStyles, styles) {
    var mergedStyles = (0, _assign3.default)({}, defaultStyles);

    for (var p in mergedStyles) {
        if (!mergedStyles.hasOwnProperty(p)) {
            continue;
        }
        if (styles[p]) {
            mergedStyles[p] += ' ' + styles[p];
        }
    }

    return mergedStyles;
};

module.exports = exports['default'];