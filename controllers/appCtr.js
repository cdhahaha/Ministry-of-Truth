/**
 * Created by yumkai on 2017/2/14.
 */
var app = angular.module('testApp',['ionic','ui.router']);
app.config(['$stateProvider', '$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/show');
    $stateProvider
        .state('show', {
            url: '/show',
            templateUrl:  './tpl/main/show.html',
            controller: 'showController'
        })
        .state('userCenter', {
            url: '/userCenter',
            templateUrl:  './tpl/main/userCenter.html',
            controller: 'userCenterController'
        })
    
}]);