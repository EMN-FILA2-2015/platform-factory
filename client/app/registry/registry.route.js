(function () {
    "use strict";

    angular
        .module('psfApp')
        .config(function ($stateProvider) {
            $stateProvider
                .state('registry', {
                    url: '/registry/:registryID',
                    templateUrl: 'app/registry/registry.html',
                    controller: 'RegistryController as registryCtrl'
                });
        });
})();