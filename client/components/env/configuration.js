'use strict';

angular.module('configuration', [])
  .constant('Configuration', {

    // Specifics environment properties
    ////////////////////////////////
    env: 'production',
    backendHost : 'localhost',
    backendPort : '8080',

    logLevel: 'warn',

    // Global properties
    /////////////////////////
    defaultLanguage: 'en'

  });
