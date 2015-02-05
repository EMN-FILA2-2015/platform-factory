(function () {
  "use strict";

  angular
    .module('psfApp')
    .controller('TemplateController', TemplateController);

  TemplateController.$inject = ['Logger'];

  function TemplateController(Logger) {
    /* jshint validthis: true */
    var vm = this;
    var logger = Logger.getInstance('TemplateController');

    vm.toggle = true;

    vm.toggleSidebar = toggleSidebar;
    vm.getWidth = getWidth;

    activate();


    ////////////////

    function activate() {
      logger.debug('activate()','Controller activated');
      /*window.onresize = function() {
        vm.$apply();
      }*/
    }



    function toggleSidebar() {
      vm.toggle = !vm.toggle;
      logger.debug('toggleSidebar()', "Sidebar state :" + vm.toggle);
      //$cookieStore.put('toggle', $scope.toggle);
    }

    function getWidth() {
      return window.innerWidth;
    };


  }

})();
