/**
 * Created by BWI on 21/01/15.
 */
(function () {
  "use strict";

  angular
    .module('psfApp')
    .config(config);

  config.$inject = ['$urlRouterProvider', '$stateProvider', '$locationProvider', 'RestangularProvider', 'Configuration', 'LoggerProvider', '$translateProvider'];

  function config($urlRouterProvider, $stateProvider, $locationProvider, RestangularProvider, Configuration, LoggerProvider, $translateProvider) {
      /**
       * Route and Navigation configuration
       */
      $urlRouterProvider
          .otherwise('/');
      $stateProvider.state('site', {
          'abstract': true,
          //views: {
          //    'navbar@': {
          //        templateUrl: 'scripts/components/navbar/navbar.html',
          //        controller: 'NavbarController'
          //    }
          //},
          resolve: {
              //authorize: ['Auth',
              //    function (Auth) {
              //        return Auth.authorize();
              //    }
              //],
              translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                  $translatePartialLoader.addPart('global');
                  $translatePartialLoader.addPart('language');
                  return $translate.refresh();
              }]
          }
      });

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
      $translateProvider.useLoader('$translatePartialLoader', {
          urlTemplate: '../components/i18n/{lang}/{part}.json'
      });

      $translateProvider.preferredLanguage(Configuration.defaultLanguage);
      $translateProvider.fallbackLanguage('en');
      $translateProvider.useLocalStorage();


  }

})();
