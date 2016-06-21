'use strict';

let error = require('app-core/core/error');
let action = require('app-core/core/action');
const API_PREFIX = '/seed';

module.exports = function (app) {
    app.get(API_PREFIX + '/info', function (request, response, next) {

        next(error.getHttpError(400, 'Cannot parse that'));
    });
};