(function () {
    'use strict';

    angular
        .module('app', ['ui.router'])
        .config(['$urlRouterProvider', '$locationProvider', appConfiguration]);

    function appConfiguration($urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/home');
        $locationProvider.hashPrefix('!');
    }
}());
