(function () {
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', appConfiguration])
        .controller('multiViewController', ['$scope', multiViewController]);

    function appConfiguration($stateProvider) {
        $stateProvider
            .state('multiView', {
                url: '/multiView',
                views: {
                    '': { templateUrl: 'app/modules/multiView/MultiView.html' },
                    'viewOne@multiView': {
                        templateUrl: 'app/modules/cats/CatsView.html'
                    },
                    'viewTwo@multiView': {
                        templateUrl: 'app/modules/nestedView/NestedView.html'
                    },
                    'viewThree@multiView': {
                        templateUrl: 'app/modules/superDeepView/SuperDeepView.html'
                    }
                }
            });
    }

    function multiViewController($scope) {

    }
}());
