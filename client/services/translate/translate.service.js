(function() {
    "use strict";

    var english_translation = {
        'APPNAME' : 'PSF-Front',
        'MESSAGE' : 'Hello world',
        'REGISTRIES_TITLE' : 'Registries',
        'REGISTRIES_ID' : 'Id',
        'REGISTRIES_NAME' : 'Name',
        'REGISTRIES_TYPE' : 'Type',
        'REGISTRIES_HOST' : 'Host',
        'REGISTRIES_PORT' : 'Port',
        'REGISTRIES_PROTOCOLE' : 'Protocole',
        'SIDEBAR_TITLE' : 'Dashboard',
        'SIDEBAR_NAVIGATION' : 'NAVIGATION',
        'SIDEBAR_MAIN' : 'Main',
        'SIDEBAR_REGISTRIES' : 'Registries',
        'NAVBAR_TITLE' : 'PSF-Front',
        'NAVBAR_SUBTITLE' : 'Fil_d_ariane',
        'NAVBAR_NOTIFICATIONS_TITLE' : 'Notifications',
        'NAVBAR_NOTIFICATIONS_SERVERSTATE' : 'Serveur Down',
        'NAVBAR_LOGIN_PROFILE' : 'Profile',
        'NAVBAR_LOGIN_SETTINGS' : 'Settings',
        'NAVBAR_LOGIN_LOGOUT' : 'Logout'
    };

    var french_translation = {
        'APPNAME' : 'PSF-Front',
        'MESSAGE' : 'Bonjour le monde',
        'REGISTRIES_TITLE' : 'Registres',
        'REGISTRIES_ID' : 'Id',
        'REGISTRIES_NAME' : 'Nom',
        'REGISTRIES_TYPE' : 'Type',
        'REGISTRIES_HOST' : 'Hôte',
        'REGISTRIES_PORT' : 'Port',
        'REGISTRIES_PROTOCOLE' : 'Protocole',
        'SIDEBAR_TITLE' : 'Tableau de bord',
        'SIDEBAR_NAVIGATION' : 'NAVIGATION',
        'SIDEBAR_MAIN' : 'Accueil',
        'SIDEBAR_REGISTRIES' : 'Registres',
        'NAVBAR_TITLE' : 'PSF-Front',
        'NAVBAR_SUBTITLE' : 'Fil_d_ariane',
        'NAVBAR_NOTIFICATIONS_TITLE' : 'Notifications',
        'NAVBAR_NOTIFICATIONS_SERVERSTATE' : 'Serveur déconnecté',
        'NAVBAR_LOGIN_PROFILE' : 'Profil',
        'NAVBAR_LOGIN_SETTINGS' : 'Paramètres',
        'NAVBAR_LOGIN_LOGOUT' : 'Déconnexion'
    };

    angular
        .module('translate', ['pascalprecht.translate'])
        .config(function($translateProvider) {
            $translateProvider.translations('en', english_translation);
            $translateProvider.translations('fr', french_translation);
            $translateProvider.preferredLanguage('fr');
        });


})();