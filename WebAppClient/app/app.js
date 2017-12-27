import './styles/styleCustom';
var mainApp = angular.module('mainApp', ["ui.router"]);

mainApp.config(['$stateProvider', '$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            template: require('./views/home.html'),
            controller: "homeController"
        })
        .state('login', {
            url: '/login',
            template: require('./views/login.html'),
            controller: "loginController"
        });

    $urlRouterProvider.otherwise('/');
}]);

require('./shared/services/loginService')(mainApp);
require('./modules/loginController')(mainApp);
require('./modules/homeController')(mainApp);

module.exports = mainApp;
