/// <reference path="_all.ts" />
var Jukebox;
(function (Jukebox) {
    var Client;
    (function (Client) {
        'use strict';
        var RootController = (function () {
            function RootController($rootScope, $state, $uibModal, authService, jukeboxServiceUrls, jukeboxWebPaths, jukeboxViewPaths) {
                var _this = this;
                this.$rootScope = $rootScope;
                this.$state = $state;
                this.$uibModal = $uibModal;
                this.authService = authService;
                this.jukeboxServiceUrls = jukeboxServiceUrls;
                this.jukeboxWebPaths = jukeboxWebPaths;
                this.jukeboxViewPaths = jukeboxViewPaths;
                this.redirectedToLogin = false;
                this.onNewUrlState = function (e, toState, toParams, fromState, fromParams) {
                    if (!_this.authService.authentication.isAuth
                        && !_this.redirectedToLogin
                        && toState.name != _this.jukeboxWebPaths.accountLogin.state
                        && toState.name != _this.jukeboxWebPaths.accountRegister.state) {
                        e.preventDefault();
                        _this.redirectToLogin();
                    }
                    else {
                        _this.showLogout = true;
                    }
                };
                $rootScope.controller = this;
                this.cofigureAuthService();
                this.configureUnauthenticatedRedirect($rootScope);
            }
            RootController.prototype.logOut = function () {
                this.authService.logOut();
                this.redirectToLogin();
            };
            RootController.prototype.errorMessage = function (message, time, errorList) {
                if (errorList === void 0) { errorList = null; }
                var modalInstance = this.$uibModal.open({
                    animation: true,
                    templateUrl: this.jukeboxViewPaths.error,
                    controller: 'errorController',
                    size: 'md',
                    resolve: {
                        message: function () {
                            return message;
                        },
                        time: function () {
                            return time;
                        },
                        errorList: function () {
                            return errorList ? errorList : [];
                        }
                    }
                });
            };
            RootController.prototype.hasRemoteTokenRequestFailed = function (rejection) {
                return rejection.status === 400
                    && rejection.config.url == this.jukeboxServiceUrls.authenticationServiceUrl
                    && this.$state.current.name != this.jukeboxWebPaths.accountLogin.state;
            };
            ;
            RootController.prototype.isPasswordSending = function (rejection) {
                return rejection.config.url == this.jukeboxServiceUrls.authenticationServiceUrl
                    && this.$state.current.name == this.jukeboxWebPaths.accountLogin.state;
            };
            RootController.prototype.redirectToLogin = function () {
                var _this = this;
                this.$state.go(this.jukeboxWebPaths.accountLogin.state);
                this.redirectedToLogin = true;
                setTimeout(function () {
                    _this.redirectedToLogin = false;
                }, 200);
            };
            RootController.prototype.cofigureAuthService = function () {
                this.authService.fillAuthData();
            };
            RootController.prototype.configureUnauthenticatedRedirect = function ($rootScope) {
                $rootScope.$on('$stateChangeStart', this.onNewUrlState);
            };
            return RootController;
        })();
        Client.RootController = RootController;
    })(Client = Jukebox.Client || (Jukebox.Client = {}));
})(Jukebox || (Jukebox = {}));
