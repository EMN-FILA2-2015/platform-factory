'use strict';

angular.module('configuration', [])
  .constant('Configuration', {

    // Specifics environment properties
    ////////////////////////////////
    env: 'developement',
    backendHost : 'localhost',
    backendPort : '8080',

    logLevel: 'debug',

    // Global properties
    /////////////////////////
    defaultLanguage: 'en'

  });
