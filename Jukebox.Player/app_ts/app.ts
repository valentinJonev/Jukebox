/// <reference path="_all.ts" />

module Jukebox.Player {
    'use strict';

    import Configurations = Jukebox.Player.Configurations;
    import Constants = Jukebox.Player.Constants;
    import Controllers = Jukebox.Player.Controllers;
    import Filters = Jukebox.Player.Filters;
    import Services = Jukebox.Player.Services;

    var app: angular.IModule = angular.module('jukebox-web',
        ['ui.router', 'LocalStorageModule', 'angular-loading-bar', 'jukebox-web-service-url', 'ui.bootstrap', 'ng-file-model', 'SignalR'])
        //constants
        .constant('jukeboxWebPaths', new Constants.JukeboxWebPaths())
        .constant('jukeboxViewPaths', new Constants.JukeboxViewPaths())
        .constant('jukeboxSettings', new Constants.JukeboxSettings())
        //filters
        .filter('stringFormat', Filters.stringFormat)
        //services
        .service('authService', Services.AuthService)
        .service('hubService', Services.HubService)
        //controllers
        .controller("homeController", Controllers.HomeController)
        .controller("indexController", Controllers.IndexController)
        //configuration
        .config(['cfpLoadingBarProvider', Configurations.configureLoadingBar])
        .config(['$httpProvider', Configurations.confugreInterceptoprs])
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 'jukeboxWebPaths', 'jukeboxViewPaths', 'jukeboxServiceUrls', Configurations.configureRouting])
        .config(['localStorageServiceProvider', Configurations.configureLocalStorage])
        //custom initialization
        .run(($rootScope: IRootScope, $state: angular.ui.IStateService, $uibModal: angular.ui.bootstrap.IModalService,
                authService: Services.IAuthService, jukeboxServiceUrls: Constants.JukeboxServiceUrls, jukeboxWebPaths: Constants.JukeboxWebPaths,
                jukeboxViewPaths: Constants.JukeboxViewPaths) =>
            initialize($rootScope, $state, $uibModal, authService, jukeboxServiceUrls, jukeboxWebPaths, jukeboxViewPaths));
    
    function initialize($rootScope: IRootScope, $state: angular.ui.IStateService, $uibModal: angular.ui.bootstrap.IModalService, authService: Services.IAuthService,
        jukeboxServiceUrls: Constants.JukeboxServiceUrls, jukeboxWebPaths: Constants.JukeboxWebPaths, jukeboxViewPaths: Constants.JukeboxViewPaths) {
        $rootScope.controller = new RootController($rootScope, $state, $uibModal, authService, jukeboxServiceUrls, jukeboxWebPaths, jukeboxViewPaths);
    }
}