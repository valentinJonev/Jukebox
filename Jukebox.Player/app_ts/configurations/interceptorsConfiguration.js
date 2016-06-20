/// <reference path="../_all.ts" />
var Jukebox;
(function (Jukebox) {
    var Player;
    (function (Player) {
        var Configurations;
        (function (Configurations) {
            'use strict';
            function confugreInterceptoprs($httpProvider) {
                $httpProvider.interceptors.push(Player.Services.AuthInterceptorService.Factory);
                $httpProvider.interceptors.push(Player.Services.ErrorInterceptorService.Factory);
            }
            Configurations.confugreInterceptoprs = confugreInterceptoprs;
        })(Configurations = Player.Configurations || (Player.Configurations = {}));
    })(Player = Jukebox.Player || (Jukebox.Player = {}));
})(Jukebox || (Jukebox = {}));
