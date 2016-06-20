/// <reference path="_all.ts" />
var Jukebox;
(function (Jukebox) {
    var Player;
    (function (Player) {
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
                        && !_this.redirectedToLogin) {
                        //&& toState.name != this.shipsWebPaths.accountLogin.state
                        //&& toState.name != this.shipsWebPaths.accountRegister.state) {
                        e.preventDefault();
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
                // this.redirectToLogin();
            };
            /*public errorMessage(message: string, time: number, errorList: string[] = null) {
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
            }*/
            RootController.prototype.hasRemoteTokenRequestFailed = function (rejection) {
                return rejection.status === 400
                    && rejection.config.url == this.jukeboxServiceUrls.authenticationServiceUrl;
                // && this.$state.current.name != this.shipsWebPaths.accountLogin.state;
            };
            ;
            RootController.prototype.isPasswordSending = function (rejection) {
                return rejection.config.url == this.jukeboxServiceUrls.authenticationServiceUrl;
                // && this.$state.current.name == this.shipsWebPaths.accountLogin.state;
            };
            /*private redirectToLogin() {
                this.$state.go(this.shipsWebPaths.accountLogin.state);
                this.redirectedToLogin = true;
                setTimeout(() => {
                    this.redirectedToLogin = false;
                }, 200);
            }*/
            RootController.prototype.cofigureAuthService = function () {
                this.authService.fillAuthData();
            };
            RootController.prototype.configureUnauthenticatedRedirect = function ($rootScope) {
                $rootScope.$on('$stateChangeStart', this.onNewUrlState);
            };
            return RootController;
        })();
        Player.RootController = RootController;
    })(Player = Jukebox.Player || (Jukebox.Player = {}));
})(Jukebox || (Jukebox = {}));
