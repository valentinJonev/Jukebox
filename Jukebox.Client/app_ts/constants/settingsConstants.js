/// <reference path="../_all.ts" />
var Jukebox;
(function (Jukebox) {
    var Client;
    (function (Client) {
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
        })(Constants = Client.Constants || (Client.Constants = {}));
    })(Client = Jukebox.Client || (Jukebox.Client = {}));
})(Jukebox || (Jukebox = {}));
