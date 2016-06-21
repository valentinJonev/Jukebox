/// <reference path="../../_all.ts" />
var Jukebox;
(function (Jukebox) {
    var Client;
    (function (Client) {
        var Controllers;
        (function (Controllers) {
            var Account;
            (function (Account) {
                'use strict';
                var LoginController = (function () {
                    function LoginController($scope, $state, authService, jukeboxWebPaths) {
                        var _this = this;
                        this.$scope = $scope;
                        this.$state = $state;
                        this.authService = authService;
                        this.jukeboxWebPaths = jukeboxWebPaths;
                        this.onLoginSucccess = function (response) {
                            _this.$state.go(_this.jukeboxWebPaths.home.state);
                        };
                        this.onLoginFail = function (response) {
                            if (response.data) {
                                _this.errorMessage = response.data.error;
                            }
                            _this.loginData.password = '';
                        };
                        $scope.controller = this;
                        this.errorMessage = "";
                        this.loginData = {
                            userName: "",
                            password: "",
                            rememberMe: ""
                        };
                        this.val = {
                            usernameMinLength: 3,
                            usernameMaxLength: 100,
                            passwordMinLength: 6,
                            passwordMaxLength: 100
                        };
                    }
                    LoginController.prototype.login = function () {
                        this.errorMessage = "";
                        if (this.$scope.loginForm.$valid) {
                            this.authService.login(this.loginData).then(this.onLoginSucccess, this.onLoginFail);
                        }
                        else {
                            this.loginForm.$submitted = true;
                        }
                    };
                    LoginController.$inject = ['$scope', '$state', 'authService', 'jukeboxWebPaths'];
                    return LoginController;
                })();
                Account.LoginController = LoginController;
            })(Account = Controllers.Account || (Controllers.Account = {}));
        })(Controllers = Client.Controllers || (Client.Controllers = {}));
    })(Client = Jukebox.Client || (Jukebox.Client = {}));
})(Jukebox || (Jukebox = {}));
