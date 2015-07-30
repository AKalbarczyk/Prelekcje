(function () {
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', appConfiguration])
        .controller('homeController', ['$scope', homeController]);

    function appConfiguration($stateProvider) {
        $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: 'app/modules/home/HomeView.html',
                    controller: 'homeController'
                });
    }

    function homeController($scope) {
        
    }
}());