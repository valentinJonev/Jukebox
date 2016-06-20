var Jukebox;
(function (Jukebox) {
    var Player;
    (function (Player) {
        var Models;
        (function (Models) {
            var Account;
            (function (Account) {
                'use strict';
                var LoginData = (function () {
                    function LoginData() {
                    }
                    return LoginData;
                })();
                Account.LoginData = LoginData;
                var UserCreateModel = (function () {
                    function UserCreateModel() {
                    }
                    return UserCreateModel;
                })();
                Account.UserCreateModel = UserCreateModel;
                var LoginValidation = (function () {
                    function LoginValidation() {
                    }
                    return LoginValidation;
                })();
                Account.LoginValidation = LoginValidation;
                var Authentication = (function () {
                    function Authentication() {
                    }
                    return Authentication;
                })();
                Account.Authentication = Authentication;
                var AuthorizedData = (function () {
                    function AuthorizedData() {
                    }
                    return AuthorizedData;
                })();
                Account.AuthorizedData = AuthorizedData;
                var UserListModel = (function () {
                    function UserListModel() {
                    }
                    return UserListModel;
                })();
                Account.UserListModel = UserListModel;
                var UserGameModel = (function () {
                    function UserGameModel() {
                    }
                    return UserGameModel;
                })();
                Account.UserGameModel = UserGameModel;
            })(Account = Models.Account || (Models.Account = {}));
        })(Models = Player.Models || (Player.Models = {}));
    })(Player = Jukebox.Player || (Jukebox.Player = {}));
})(Jukebox || (Jukebox = {}));
