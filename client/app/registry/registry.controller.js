(function () {
    "use strict";

    angular
        .module('psfApp')
        .controller('RegistryController', RegistryController);

    RegistryController.$inject = ['Configuration', 'Logger', '$stateParams'];

    function RegistryController(Configuration, Logger, $stateParams) {
        /* jshint validthis: true */
        var vm = this;
        var logger = Logger.getInstance('MainController');

        vm.registryID = $stateParams.registryID;

        vm.message = '';
        vm.currentEnv = Configuration.env;

        //TODO hardcode. A remplacer par le service correspondant GET registry/:id
        vm.registry =
        {
            "id" : 1,
            "name" : "Registery 1",
            "type" : "Docker",
            "host" : "localhost",
            "port" : "9000",
            "protocole" : "http"
        };
    }
})();