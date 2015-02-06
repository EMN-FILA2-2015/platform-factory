(function () {
    "use strict";

    angular
        .module('psfApp')
        .config(function ($stateProvider) {
            $stateProvider
                .state('registries', {
                    url: '/registries',
                    templateUrl: 'app/registries/registries.html',
                    controller: 'RegistriesController as registriesCtrl'
                });
        });
})();