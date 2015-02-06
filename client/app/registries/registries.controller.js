(function () {
    "use strict";

    angular
        .module('psfApp')
        .controller('RegistriesController', RegistriesController);

    RegistriesController.$inject = ['RegistryService', 'Configuration', 'Logger'];

    function RegistriesController(Configuration, Logger, RegistryService) {
        /* jshint validthis: true */
        var vm = this;
        var logger = Logger.getInstance('RegistriesController');

        vm.message = '';
        vm.currentEnv = Configuration.env;

        vm.registries;

        initRegistries();


        /////

        function initRegistries() {
            logger.debug('initRegistries()','Controller activated');
            RegistryService.getRegistries()
                .then(function(data){
                    vm.registries = data;
                    logger.debug('Retrive the data --> ' + data)
                })
                .catch(function(error) {
                    logger.error('Enabled to get the list of registries.');
                });
        }
    }
})();
