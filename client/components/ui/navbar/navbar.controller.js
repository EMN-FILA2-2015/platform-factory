(function () {
    "use strict";

    angular
        .module('psfApp')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['Logger'];

    function NavbarController(Logger) {
        /* jshint validthis: true */
        var vm = this;
        var logger = Logger.getInstance('NavbarController');


        activate();


        ////////////////

        function activate() {
            logger.debug('activate()','Controller activated');
        }


    }

})();
