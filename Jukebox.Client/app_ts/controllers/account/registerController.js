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
                var RegisterController = (function () {
                    function RegisterController($scope, $state, authService, jukeboxWebPaths) {
                        var _this = this;
                        this.$scope = $scope;
                        this.$state = $state;
                        this.authService = authService;
                        this.jukeboxWebPaths = jukeboxWebPaths;
                        this.onRegisterSucccess = function (response) {
                            _this.$state.go(_this.jukeboxWebPaths.accountLogin.state);
                        };
                        this.onRegisterFail = function (response) {
                            if (response.data) {
                                _this.errorMessage = response.data.message;
                            }
                            _this.model.password = '';
                            _this.repeatPassword = '';
                        };
                        $scope.controller = this;
                        this.errorMessage = "";
                        this.model = {
                            username: "",
                            password: ""
                        };
                    }
                    RegisterController.prototype.register = function () {
                        this.errorMessage = "";
                        if (this.$scope.registerForm.$valid) {
                            this.authService.register(this.model).then(this.onRegisterSucccess, this.onRegisterFail);
                        }
                        else {
                            this.$scope.registerForm.$submitted = true;
                        }
                    };
                    RegisterController.$inject = ['$scope', '$state', 'authService', 'jukeboxWebPaths'];
                    return RegisterController;
                })();
                Account.RegisterController = RegisterController;
            })(Account = Controllers.Account || (Controllers.Account = {}));
        })(Controllers = Client.Controllers || (Client.Controllers = {}));
    })(Client = Jukebox.Client || (Jukebox.Client = {}));
})(Jukebox || (Jukebox = {}));
