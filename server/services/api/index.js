'use strict';

/*CONFIG STAGE*/

let config = require('config');

require('app-core/core/api-server')({
    name: config.get('name'),
    routes: require('./routes'),
    port: config.get('services:api:port')
});

require('app-core/core/db').initConnection({
    port: config.get('db:port'),
    name: config.get('db:name'),
    host: config.get('db:host')
});