/// <reference path="_all.ts" />
var Jukebox;
(function (Jukebox) {
    var Player;
    (function (Player) {
        'use strict';
        var Configurations = Jukebox.Player.Configurations;
        var Constants = Jukebox.Player.Constants;
        var Controllers = Jukebox.Player.Controllers;
        var Filters = Jukebox.Player.Filters;
        var Services = Jukebox.Player.Services;
        var app = angular.module('jukebox-web', ['ui.router', 'LocalStorageModule', 'angular-loading-bar', 'jukebox-web-service-url', 'ui.bootstrap', 'ng-file-model', 'SignalR'])
            .constant('jukeboxWebPaths', new Constants.JukeboxWebPaths())
            .constant('jukeboxViewPaths', new Constants.JukeboxViewPaths())
            .constant('jukeboxSettings', new Constants.JukeboxSettings())
            .filter('stringFormat', Filters.stringFormat)
            .service('authService', Services.AuthService)
            .service('hubService', Services.HubService)
            .controller("homeController", Controllers.HomeController)
            .controller("indexController", Controllers.IndexController)
            .controller("loginController", Controllers.Account.LoginController)
            .config(['cfpLoadingBarProvider', Configurations.configureLoadingBar])
            .config(['$httpProvider', Configurations.confugreInterceptoprs])
            .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 'jukeboxWebPaths', 'jukeboxViewPaths', 'jukeboxServiceUrls', Configurations.configureRouting])
            .config(['localStorageServiceProvider', Configurations.configureLocalStorage])
            .run(function ($rootScope, $state, $uibModal, authService, jukeboxServiceUrls, jukeboxWebPaths, jukeboxViewPaths) {
            return initialize($rootScope, $state, $uibModal, authService, jukeboxServiceUrls, jukeboxWebPaths, jukeboxViewPaths);
        });
        function initialize($rootScope, $state, $uibModal, authService, jukeboxServiceUrls, jukeboxWebPaths, jukeboxViewPaths) {
            $rootScope.controller = new Player.RootController($rootScope, $state, $uibModal, authService, jukeboxServiceUrls, jukeboxWebPaths, jukeboxViewPaths);
        }
    })(Player = Jukebox.Player || (Jukebox.Player = {}));
})(Jukebox || (Jukebox = {}));
