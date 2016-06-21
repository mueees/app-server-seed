'use strict';

let config = new (require("nconf").Provider)(),
    path = require("path"),
    env = require('app-core/core/environment'),
    configFile;

switch (true) {
    case env.isDevelopment():
        configFile = 'development.json';

        break;

    case env.isProduction():
        configFile = 'production.json';

        break;

    case env.isTest():
        configFile = 'test.json';

        break;
}

config.file('seed.main', {file: path.join(__dirname, 'main.json')});
config.file('seed.configFile', {file: path.join(__dirname, configFile)});

module.exports = config;