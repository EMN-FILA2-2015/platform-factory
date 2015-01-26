(function () {
  "use strict";

  angular
    .module('psfApp')
    .config(function ($stateProvider) {
      $stateProvider
        .state('main', {
          url: '/',
          templateUrl: 'app/main/main.html',
          controller: 'MainController as main'
        });
    });

})();



