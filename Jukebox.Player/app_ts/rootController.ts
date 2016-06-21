﻿/// <reference path="_all.ts" />

module Jukebox.Player {
    'use strict';

    export interface IRootScope extends angular.IRootScopeService {
        controller: IRootController;
    }

    export interface IRootController {
        showLogout: boolean;

        logOut();
        errorMessage(message: string, time: number);
        errorMessage(message: string, time: number, errorList: string[]);
        hasRemoteTokenRequestFailed(rejection: angular.IHttpPromiseCallbackArg<{}>): boolean;
        isPasswordSending(rejection: angular.IHttpPromiseCallbackArg<{}>): boolean;
    }

    export class RootController implements IRootController {
        private redirectedToLogin: boolean = false;

        public showLogout: boolean;

        constructor(private $rootScope: IRootScope,
            private $state: angular.ui.IStateService,
            private $uibModal: angular.ui.bootstrap.IModalService,
            private authService: Services.IAuthService,
            private jukeboxServiceUrls: Constants.JukeboxServiceUrls,
            private jukeboxWebPaths: Constants.JukeboxWebPaths,
            private jukeboxViewPaths: Constants.JukeboxViewPaths) {
            $rootScope.controller = this;

            this.cofigureAuthService();
            this.configureUnauthenticatedRedirect($rootScope);
        }

        public logOut() {
            this.authService.logOut();
            // this.redirectToLogin();
        }

        public errorMessage(message: string, time: number, errorList: string[] = null) {
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
        }
        
        public hasRemoteTokenRequestFailed(rejection: angular.IHttpPromiseCallbackArg<{}>): boolean {
            return rejection.status === 400
                && rejection.config.url == this.jukeboxServiceUrls.authenticationServiceUrl
                && this.$state.current.name != this.jukeboxWebPaths.accountLogin.state;
        };

        public isPasswordSending(rejection: angular.IHttpPromiseCallbackArg<{}>): boolean {
            return rejection.config.url == this.jukeboxServiceUrls.authenticationServiceUrl
                && this.$state.current.name == this.jukeboxWebPaths.accountLogin.state;
        }

        private redirectToLogin() {
            this.$state.go(this.jukeboxWebPaths.accountLogin.state);
            this.redirectedToLogin = true;
            setTimeout(() => {
                this.redirectedToLogin = false;
            }, 200);
        }

        private cofigureAuthService() {
            this.authService.fillAuthData();
        }

        private configureUnauthenticatedRedirect($rootScope: IRootScope) {
            $rootScope.$on('$stateChangeStart', this.onNewUrlState);
        }

        private onNewUrlState = (e: angular.IAngularEvent, toState: angular.ui.IState, toParams: angular.ui.IStateParams, fromState: angular.ui.IState, fromParams: angular.ui.IStateParams) => {
            if (!this.authService.authentication.isAuth
                && !this.redirectedToLogin
                && toState.name != this.jukeboxWebPaths.accountLogin.state
                && toState.name != this.jukeboxWebPaths.accountRegister.state) {
                e.preventDefault();
                this.redirectToLogin();
            }
            else {
                this.showLogout = true;
            }
        }
    }
}