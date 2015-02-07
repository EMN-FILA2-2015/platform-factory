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
                "name" : "Registry 1",
                "type" : {
                    nom: "Docker",
                    logo: "assets/images/icons/docker.png"
                },
                "host" : "localhost",
                "port" : "9000",
                "protocole" : "http"
            },
            {
                "id" : 2,
                "name" : "Registry 2",
                "type" : {
                    nom: "Docker",
                    logo: "assets/images/icons/docker.png"
                },
                "host" : "localhost",
                "port" : "9000",
                "protocole" : "https"
            }
        ];
    }
})();
