(function () {
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', appConfiguration])
        .controller('superDeepViewController', ['$scope', superDeepViewController]);

    function appConfiguration($stateProvider) {
        $stateProvider
                .state('home.nestedView.superDeepView', {
                    templateUrl: 'app/modules/superDeepView/SuperDeepView.html',
                    controller: 'superDeepViewController'
                });
    }

    function superDeepViewController($scope) {
        console.log('superDeep');
    }
}());