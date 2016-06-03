import _ from 'lodash';
import Map from 'es6-map';

const userConfigurationIndex = new Map();
const defaultUserConfiguration = {};

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
export default (userConfiguration = defaultUserConfiguration) => {
    let configuration;

    configuration = userConfigurationIndex.get(userConfiguration);

    if (configuration) {
        return configuration;
    }

    configuration = {
        allowMultiple: false,
        mergeStyles: false,
        errorWhenNotFound: true
    };

    _.forEach(userConfiguration, (value, name) => {
        if (_.isUndefined(configuration[name])) {
            throw new Error('Unknown configuration property "' + name + '".');
        }

        if (!_.isBoolean(value)) {
            throw new Error('"' + name + '" property value must be a boolean.');
        }

        configuration[name] = value;
    });

    userConfigurationIndex.set(userConfiguration, configuration);

    return configuration;
};
