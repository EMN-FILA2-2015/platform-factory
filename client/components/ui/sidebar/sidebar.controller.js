(function () {
  "use strict";

  angular
    .module('psfApp')
    .controller('SidebarController', SidebarController);

  SidebarController.$inject = ['Logger'];

  function SidebarController(Logger) {
    /* jshint validthis: true */
    var vm = this;
    var logger = Logger.getInstance('SidebarController');
    var showRegistries = false;

    vm.showRegistries = showRegistries;
    vm.toggleRegistries = toggleRegistries;

    activate();


    ////////////////

    function activate() {
      logger.debug('activate()','Controller activated');
    }

    function toggleRegistries() {
      vm.showRegistries = !vm.showRegistries;
    }

  }

})();
