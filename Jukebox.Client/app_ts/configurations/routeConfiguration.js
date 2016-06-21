/// <reference path="../_all.ts" />
var Jukebox;
(function (Jukebox) {
    var Client;
    (function (Client) {
        var Configurations;
        (function (Configurations) {
            'use strict';
            function configureRouting($stateProvider, $urlRouterProvider, $locationProvider, jukeboxWebPaths, jukeboxViewPaths, jukeboxServiceUrls) {
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
                $stateProvider.state(jukeboxWebPaths.accountRegister.state, {
                    url: jukeboxWebPaths.accountRegister.url,
                    controller: "account.registerController",
                    templateUrl: jukeboxViewPaths.accountRegister
                });
                $urlRouterProvider.otherwise(jukeboxWebPaths.home.url);
                // use the HTML5 History API
                $locationProvider.html5Mode({
                    enabled: false,
                    requireBase: true
                });
            }
            Configurations.configureRouting = configureRouting;
        })(Configurations = Client.Configurations || (Client.Configurations = {}));
    })(Client = Jukebox.Client || (Jukebox.Client = {}));
})(Jukebox || (Jukebox = {}));
