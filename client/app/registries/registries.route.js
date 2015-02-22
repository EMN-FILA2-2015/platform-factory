(function () {
    "use strict";

    angular
        .module('psfApp')
        .config(function ($stateProvider) {
            $stateProvider
                .state('registries', {
                    parent: 'site',
                    url: '/registries',
                    views: {
                        'content@': {
                            templateUrl: 'app/registries/registries.html',
                            controller: 'RegistriesController as registriesCtrl'
                        }
                    },
                    resolve: {
                        mainTranslatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
                            $translatePartialLoader.addPart('registry');
                            return $translate.refresh();
                        }]
                    }
                });
        });
})();