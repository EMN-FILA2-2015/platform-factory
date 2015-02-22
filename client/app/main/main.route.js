(function () {
  "use strict";

  angular
    .module('psfApp')
    .config(function ($stateProvider) {
      $stateProvider
        .state('main', {
          parent: 'site',
          url: '/',
          views: {
            'content@': {
              templateUrl: 'app/main/main.html',
              controller: 'MainController as main'
            }
          },
          resolve: {
            mainTranslatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
              $translatePartialLoader.addPart('main');
              return $translate.refresh();
            }]
          }
        });
    });

})();



