/// <reference path="_all.ts" />
var Jukebox;
(function (Jukebox) {
    var Client;
    (function (Client) {
        'use strict';
        var Configurations = Jukebox.Client.Configurations;
        var Constants = Jukebox.Client.Constants;
        var Controllers = Jukebox.Client.Controllers;
        var Filters = Jukebox.Client.Filters;
        var Services = Jukebox.Client.Services;
        var app = angular.module('jukebox-web', ['ui.router', 'LocalStorageModule', 'angular-loading-bar', 'jukebox-web-service-url', 'ui.bootstrap', 'ng-file-model', 'SignalR'])
            .constant('jukeboxWebPaths', new Constants.JukeboxWebPaths())
            .constant('jukeboxViewPaths', new Constants.JukeboxViewPaths())
            .constant('jukeboxSettings', new Constants.JukeboxSettings())
            .filter('stringFormat', Filters.stringFormat)
            .service('authService', Services.AuthService)
            .service('hubService', Services.HubService)
            .controller("loginController", Controllers.Account.LoginController)
            .controller("account.registerController", Controllers.Account.RegisterController)
            .controller("homeController", Controllers.HomeController)
            .controller("indexController", Controllers.IndexController)
            .config(['cfpLoadingBarProvider', Configurations.configureLoadingBar])
            .config(['$httpProvider', Configurations.confugreInterceptoprs])
            .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 'jukeboxWebPaths', 'jukeboxViewPaths', 'jukeboxServiceUrls', Configurations.configureRouting])
            .config(['localStorageServiceProvider', Configurations.configureLocalStorage])
            .run(function ($rootScope, $state, $uibModal, authService, jukeboxServiceUrls, jukeboxWebPaths, jukeboxViewPaths) {
            return initialize($rootScope, $state, $uibModal, authService, jukeboxServiceUrls, jukeboxWebPaths, jukeboxViewPaths);
        });
        function initialize($rootScope, $state, $uibModal, authService, jukeboxServiceUrls, jukeboxWebPaths, jukeboxViewPaths) {
            $rootScope.controller = new Client.RootController($rootScope, $state, $uibModal, authService, jukeboxServiceUrls, jukeboxWebPaths, jukeboxViewPaths);
        }
    })(Client = Jukebox.Client || (Jukebox.Client = {}));
})(Jukebox || (Jukebox = {}));
