/// <reference path="../../_all.ts" />

module Jukebox.Player.Controllers.Account {
    'use strict';
    import constants = Jukebox.Player.Constants;
    import models = Jukebox.Player.Models.Account;

    export interface ILoginScope extends angular.IScope {
        controller: ILoginController;
        loginForm: angular.IFormController;
    }

    export interface ILoginController {
        errorMessage: string;
        loginData: models.LoginData;
        val: models.LoginValidation;
        loginForm: angular.IFormController;

        login(): void;
    }

    export class LoginController {
        static $inject = ['$scope', '$state', 'authService', 'jukeboxWebPaths'];

        errorMessage: string;
        loginData: models.LoginData;
        val: models.LoginValidation;
        loginForm: angular.IFormController;

        constructor(private $scope: ILoginScope, private $state: angular.ui.IStateService, private authService: Services.IAuthService, private jukeboxWebPaths: constants.JukeboxWebPaths) {
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

            this.login();
        }

        public login() {
            this.errorMessage = "";

            this.loginData.userName = "raspberry";
            this.loginData.password = "raspberry";

            this.authService.login(this.loginData).then(this.onLoginSucccess, this.onLoginFail);
        }

        private onLoginSucccess = (response: Models.Account.AuthorizedData) => {
            this.$state.go(this.jukeboxWebPaths.home.state);
        }

        private onLoginFail = (response: angular.IHttpPromiseCallbackArg<Models.Error.AuthError>) => {
            if (response.data) {
                this.errorMessage = response.data.error;
            }

            this.loginData.password = '';
        }
    }
}