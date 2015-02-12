/**
 * Created by BWI on 21/01/15.
 */
(function () {
  "use strict";

  angular
    .module('psfApp')
    .config(config);

  config.$inject = ['$urlRouterProvider', '$locationProvider', 'RestangularProvider', 'Configuration', 'LoggerProvider', '$translateProvider'];

  function config($urlRouterProvider, $locationProvider, RestangularProvider, Configuration, LoggerProvider, $translateProvider) {
      /**
       * Route and Navigation configuration
       */
      //$locationProvider.html5Mode(true);
      $urlRouterProvider
          .otherwise('/');


      /**
       * HTTP and REST Service configuration
       */
      RestangularProvider
          .setBaseUrl('http://' + Configuration.backendHost + ':' + Configuration.backendPort);

      /**
       * Logger Configuration
       */
      LoggerProvider.enabled(true);
      LoggerProvider.setLevel(Configuration.logLevel);

      /**
       * Language configuration
       */
      $translateProvider.useStaticFilesLoader({
          prefix: '../components/lang/messages_',
          suffix: '.json'
      });
      $translateProvider.preferredLanguage(Configuration.defaultLanguage);
      $translateProvider.fallbackLanguage('en');
      $translateProvider.useLocalStorage();

  }

})();
