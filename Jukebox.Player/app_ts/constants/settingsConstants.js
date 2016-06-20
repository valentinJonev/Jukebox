/// <reference path="../_all.ts" />
var Jukebox;
(function (Jukebox) {
    var Player;
    (function (Player) {
        var Constants;
        (function (Constants) {
            'use strict';
            var JukeboxSettings = (function () {
                function JukeboxSettings() {
                    this.clientId = '2261c0d1-3e69-4275-ad9a-3ab15bab0e3c';
                }
                return JukeboxSettings;
            })();
            Constants.JukeboxSettings = JukeboxSettings;
        })(Constants = Player.Constants || (Player.Constants = {}));
    })(Player = Jukebox.Player || (Jukebox.Player = {}));
})(Jukebox || (Jukebox = {}));
