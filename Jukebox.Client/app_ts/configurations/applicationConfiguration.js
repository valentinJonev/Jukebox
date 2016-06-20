/// <reference path="../_all.ts" />
var Jukebox;
(function (Jukebox) {
    var Player;
    (function (Player) {
        var Configurations;
        (function (Configurations) {
            'use strict';
            //TODO: find interface
            function configureLoadingBar(cfpLoadingBarProvider) {
                cfpLoadingBarProvider.includeSpinner = false;
            }
            Configurations.configureLoadingBar = configureLoadingBar;
        })(Configurations = Player.Configurations || (Player.Configurations = {}));
    })(Player = Jukebox.Player || (Jukebox.Player = {}));
})(Jukebox || (Jukebox = {}));
