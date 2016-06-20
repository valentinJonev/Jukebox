var Jukebox;
(function (Jukebox) {
    var Player;
    (function (Player) {
        var Constants;
        (function (Constants) {
            'use strict';
            var UrlState = (function () {
                function UrlState() {
                }
                return UrlState;
            })();
            Constants.UrlState = UrlState;
            var JukeboxWebPaths = (function () {
                function JukeboxWebPaths() {
                    this.home = { url: '/home', state: 'home' };
                }
                return JukeboxWebPaths;
            })();
            Constants.JukeboxWebPaths = JukeboxWebPaths;
            var JukeboxViewPaths = (function () {
                function JukeboxViewPaths() {
                    this.home = './views/home.html';
                }
                return JukeboxViewPaths;
            })();
            Constants.JukeboxViewPaths = JukeboxViewPaths;
        })(Constants = Player.Constants || (Player.Constants = {}));
    })(Player = Jukebox.Player || (Jukebox.Player = {}));
})(Jukebox || (Jukebox = {}));
