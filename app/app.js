(function() {
    'use strict';

    angular
        .module('app', [
            'ui.router',
            'eyw.welcome'
        ])
        .config(AppConfig)
        .run(AppRun);


    /**
     * App Config
     */
    AppConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function AppConfig($stateProvider, $urlRouterProvider) {
        //Setup app states/routes
        $stateProvider
            .state('eyw', {
                url: '',
                abstract: true
            });

        //Unmatched urls go to root route
        $urlRouterProvider.otherwise('/welcome');
    }


    /**
     * App Run
     */
    function AppRun() {
        //Initialize app on run
    }
})();
