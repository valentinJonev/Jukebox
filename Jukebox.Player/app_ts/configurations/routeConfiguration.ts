/// <reference path="../_all.ts" />

module Jukebox.Player.Configurations {
    'use strict';


    export function configureRouting($stateProvider: angular.ui.IStateProvider,
        $urlRouterProvider: angular.ui.IUrlRouterProvider,
        $locationProvider: angular.ILocationProvider,
        jukeboxWebPaths: Constants.JukeboxWebPaths,
        jukeboxViewPaths: Constants.JukeboxWebPaths,
        jukeboxServiceUrls: Constants.JukeboxWebPaths) {

        $stateProvider.state(jukeboxWebPaths.home.state, {
            url: jukeboxWebPaths.home.url,
            controller: "homeController",
            templateUrl: jukeboxViewPaths.home
        });

        $stateProvider.state(jukeboxWebPaths.accountLogin.state, {
            url: jukeboxWebPaths.accountLogin.url,
            controller: "loginController",
            templateUrl: jukeboxViewPaths.accountLogin
        });

        $urlRouterProvider.otherwise(jukeboxWebPaths.home.url);

        // use the HTML5 History API
        $locationProvider.html5Mode({
            enabled: false,
            requireBase: true
        });
    }
}