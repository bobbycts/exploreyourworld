(function() {
    'use strict';

    angular
        .module('app', [
            'ui.router',
            'tlg.welcome'
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
            .state('tlg', {
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
