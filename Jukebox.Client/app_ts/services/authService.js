/// <reference path="../_all.ts" />
var Jukebox;
(function (Jukebox) {
    var Player;
    (function (Player) {
        var Services;
        (function (Services) {
            'use strict';
            var AuthService = (function () {
                function AuthService($http, $q, localStorageService, jukeboxServiceUrls, jukeboxSettings) {
                    var _this = this;
                    this.$http = $http;
                    this.$q = $q;
                    this.localStorageService = localStorageService;
                    this.jukeboxServiceUrls = jukeboxServiceUrls;
                    this.jukeboxSettings = jukeboxSettings;
                    this.onLoginSuccess = function (response) {
                        response.user_name = _this.loginData.userName;
                        _this.authorizationData.setData(response);
                        _this.authentication.isAuth = true;
                        _this.authentication.userName = _this.loginData.userName;
                        _this.authentication.useRefreshTokens = false;
                        return response;
                    };
                    this.onLoginFail = function (response) {
                        _this.logOut();
                        return null;
                    };
                    this.authorizationData = new AuthorizationData(localStorageService);
                    this.authentication = new Player.Models.Account.Authentication();
                }
                AuthService.prototype.login = function (loginData) {
                    this.loginData = loginData;
                    var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password + "&client_id=" + this.jukeboxSettings.clientId;
                    return this.$http.post(this.jukeboxServiceUrls.authenticationServiceUrl, data, { headers: AuthService.TOKEN_HEADERS })
                        .success(this.onLoginSuccess)
                        .error(this.onLoginFail);
                };
                AuthService.prototype.register = function (user) {
                    return this.$http.post(this.jukeboxServiceUrls.authenticationServiceUrl + "/api/users", user);
                };
                AuthService.prototype.logOut = function () {
                    this.authorizationData.removeData();
                    this.authentication.isAuth = false;
                    this.authentication.userName = "";
                    this.authentication.useRefreshTokens = false;
                };
                AuthService.prototype.fillAuthData = function () {
                    var authData = this.authorizationData.getData();
                    if (authData) {
                        this.authentication.isAuth = true;
                        this.authentication.userName = authData.user_name;
                        this.authentication.useRefreshTokens = true;
                    }
                };
                AuthService.$inject = ['$http', '$q', 'localStorageService', 'jukeboxServiceUrls', 'jukeboxSettings'];
                AuthService.TOKEN_HEADERS = { 'Content-Type': 'application/x-www-form-urlencoded' };
                return AuthService;
            })();
            Services.AuthService = AuthService;
            var AuthorizationData = (function () {
                function AuthorizationData(localStorageService) {
                    this.localStorageService = localStorageService;
                }
                AuthorizationData.prototype.getData = function () {
                    return this.localStorageService.get(AuthorizationData.AUTH_DATA_KEY);
                };
                AuthorizationData.prototype.setData = function (data) {
                    this.localStorageService.set(AuthorizationData.AUTH_DATA_KEY, data);
                };
                AuthorizationData.prototype.removeData = function () {
                    this.localStorageService.remove(AuthorizationData.AUTH_DATA_KEY);
                };
                AuthorizationData.AUTH_DATA_KEY = 'authorizationData';
                return AuthorizationData;
            })();
        })(Services = Player.Services || (Player.Services = {}));
    })(Player = Jukebox.Player || (Jukebox.Player = {}));
})(Jukebox || (Jukebox = {}));
