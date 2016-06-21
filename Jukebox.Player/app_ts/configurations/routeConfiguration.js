/// <reference path="../_all.ts" />
var Jukebox;
(function (Jukebox) {
    var Player;
    (function (Player) {
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
                $urlRouterProvider.otherwise(jukeboxWebPaths.home.url);
                // use the HTML5 History API
                $locationProvider.html5Mode({
                    enabled: false,
                    requireBase: true
                });
            }
            Configurations.configureRouting = configureRouting;
        })(Configurations = Player.Configurations || (Player.Configurations = {}));
    })(Player = Jukebox.Player || (Jukebox.Player = {}));
})(Jukebox || (Jukebox = {}));
