'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _es6Map = require('es6-map');

var _es6Map2 = _interopRequireDefault(_es6Map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stylesIndex = new _es6Map2.default();

exports.default = function (styles, styleNames, errorWhenNotFound) {
    var appendClassName = void 0,
        stylesIndexMap = void 0;

    stylesIndexMap = stylesIndex.get(styles);

    if (stylesIndexMap) {
        var styleNameIndex = stylesIndexMap.get(styleNames);

        if (styleNameIndex) {
            return styleNameIndex;
        }
    } else {
        stylesIndexMap = stylesIndex.set(styles, new _es6Map2.default());
    }

    appendClassName = '';

    for (var styleName in styleNames) {
        if (styleNames.hasOwnProperty(styleName)) {
            var className = styles[styleNames[styleName]];

            if (className) {
                appendClassName += ' ' + className;
            } else if (errorWhenNotFound === true) {
                throw new Error('"' + styleNames[styleName] + '" CSS module is undefined.');
            }
        }
    }

    appendClassName = appendClassName.trim();

    stylesIndexMap.set(styleNames, appendClassName);

    return appendClassName;
};

module.exports = exports['default'];
//# sourceMappingURL=generateAppendClassName.js.map
