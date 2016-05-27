(function() {
    'use strict';

    angular
        .module('eyw.welcome', [])
        .config(WelcomeConfig);


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