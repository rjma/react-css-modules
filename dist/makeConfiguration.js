'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isBoolean2 = require('lodash/isBoolean');

var _isBoolean3 = _interopRequireDefault(_isBoolean2);

var _isUndefined2 = require('lodash/isUndefined');

var _isUndefined3 = _interopRequireDefault(_isUndefined2);

var _forEach2 = require('lodash/forEach');

var _forEach3 = _interopRequireDefault(_forEach2);

var _es6Map = require('es6-map');

var _es6Map2 = _interopRequireDefault(_es6Map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userConfigurationIndex = new _es6Map2.default();

/**
 * @typedef CSSModules~Options
 * @see {@link https://github.com/gajus/react-css-modules#options}
 * @property {boolean} allowMultiple
 * @property {boolean} errorWhenNotFound
 */

/**
 * @param {CSSModules~Options} userConfiguration
 * @returns {CSSModules~Options}
 */

exports.default = function () {
    var userConfiguration = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var configuration = void 0;

    configuration = userConfigurationIndex.get(userConfiguration);

    if (configuration) {
        return configuration;
    }

    configuration = {
        allowMultiple: false,
        mergeStyles: false,
        errorWhenNotFound: true
    };

    (0, _forEach3.default)(userConfiguration, function (value, name) {
        if ((0, _isUndefined3.default)(configuration[name])) {
            throw new Error('Unknown configuration property "' + name + '".');
        }

        if (!(0, _isBoolean3.default)(value)) {
            throw new Error('"' + name + '" property value must be a boolean.');
        }

        configuration[name] = value;
    });

    userConfigurationIndex.set(userConfiguration, configuration);

    return configuration;
};

module.exports = exports['default'];
//# sourceMappingURL=makeConfiguration.js.map
