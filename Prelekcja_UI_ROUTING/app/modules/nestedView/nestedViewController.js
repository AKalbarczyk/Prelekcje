(function () {
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', appConfiguration])
        .controller('nestedViewController', ['$scope', nestedViewController]);

    function appConfiguration($stateProvider) {
        $stateProvider
            .state('home.nestedView', {
                templateUrl: 'app/modules/nestedView/NestedView.html',
                controller: 'nestedViewController'
            });
    }

    function nestedViewController($scope) {
        console.log('nestedView loaded');
    }
}());