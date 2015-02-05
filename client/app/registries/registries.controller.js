(function () {
    "use strict";

    angular
        .module('psfApp')
        .controller('RegistriesController', RegistriesController);

    RegistriesController.$inject = ['Configuration', 'Logger'];

    function RegistriesController(Configuration, Logger) {
        /* jshint validthis: true */
        var vm = this;
        var logger = Logger.getInstance('RegistriesController');

        vm.message = '';
        vm.currentEnv = Configuration.env;

        //TODO hardcode. A remplacer par le service correspondant
        vm.registries = [
            {
                "id" : 1,
                "name" : "Registery 1",
                "type" : "Docker",
                "host" : "localhost",
                "port" : "9000",
                "protocole" : "http"
            },
            {
                "id" : 2,
                "name" : "Registery 2",
                "type" : "Docker",
                "host" : "localhost",
                "port" : "9000",
                "protocole" : "https"
            }
        ];
    }
})();
