(function() {
    'use strict';

    angular
        .module('tlg.welcome', [])
        .config('WelcomeConfig', WelcomeConfig);


    /**
     * Welcome Config
     */
    WelcomeConfig.$inject = ['$stateProvider'];

    function WelcomeConfig($stateProvider) {
        $stateProvider
            .state('welcome', {
                url: '/welcome',
                templateUrl: 'app/welcome/welcome.tmpl.html',
                controller: 'WelcomeController',
                controllerAs: 'ctrl'
            });
    }
})();
