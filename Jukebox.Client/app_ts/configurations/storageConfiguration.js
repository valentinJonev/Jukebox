/// <reference path="../_all.ts" />
var Jukebox;
(function (Jukebox) {
    var Player;
    (function (Player) {
        var Configurations;
        (function (Configurations) {
            'use strict';
            function configureLocalStorage(localStorageServiceProvider) {
                localStorageServiceProvider
                    .setPrefix('jukebox-web')
                    .setStorageType('localStorage');
            }
            Configurations.configureLocalStorage = configureLocalStorage;
        })(Configurations = Player.Configurations || (Player.Configurations = {}));
    })(Player = Jukebox.Player || (Jukebox.Player = {}));
})(Jukebox || (Jukebox = {}));
