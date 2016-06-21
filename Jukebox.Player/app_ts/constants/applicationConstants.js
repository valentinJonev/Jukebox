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
                    this.accountLogin = { url: '/login', state: 'login' };
                    this.accountRegister = { url: '/register', state: 'register' };
                    this.home = { url: '/home', state: 'home' };
                }
                return JukeboxWebPaths;
            })();
            Constants.JukeboxWebPaths = JukeboxWebPaths;
            var JukeboxViewPaths = (function () {
                function JukeboxViewPaths() {
                    this.shared = { modal: './views/shared/modalTemplate.html' };
                    this.accountLogin = './views/account/login.html';
                    this.accountRegister = './views/account/register.html';
                    this.home = './views/home.html';
                    this.error = './views/error.html';
                }
                return JukeboxViewPaths;
            })();
            Constants.JukeboxViewPaths = JukeboxViewPaths;
            var SharedViewPaths = (function () {
                function SharedViewPaths() {
                }
                return SharedViewPaths;
            })();
            Constants.SharedViewPaths = SharedViewPaths;
        })(Constants = Player.Constants || (Player.Constants = {}));
    })(Player = Jukebox.Player || (Jukebox.Player = {}));
})(Jukebox || (Jukebox = {}));
