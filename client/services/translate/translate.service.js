(function() {
    "use strict";

    var english_translation = {
        'MESSAGE' : 'Hello world',
        'REGISTRIES_TITLE' : 'Registries'
    };

    var french_translation = {
        'MESSAGE' : 'Bonjour le monde',
        'REGISTRIES_TITLE' : 'Registres'
    };

    angular
        .module('translate', ['pascalprecht.translate'])
        .config(function($translateProvider) {
            $translateProvider.translations('en', english_translation);
            $translateProvider.translations('fr', french_translation);
            $translateProvider.preferredLanguage('fr');
        });


})();