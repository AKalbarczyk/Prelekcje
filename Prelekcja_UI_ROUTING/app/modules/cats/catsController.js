(function () {
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', catsConfig])
        .controller('catsController', ['$scope', catsController]);

    function catsConfig($stateProvider) {
        $stateProvider
            .state('cats', {
                url: '/cats',
                templateUrl: 'app/modules/cats/CatsView.html',
                controller: 'catsController'
            });
    }

    function catsController($scope) {

    }
}());
