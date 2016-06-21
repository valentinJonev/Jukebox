/// <reference path="../_all.ts" />

module Jukebox.Client.Controllers {
    'use strict';

    export interface IIndexScope extends angular.IScope {
        viewModel: IIndexController;
    }

    export interface IIndexController {
        authentication: Models.Account.Authentication;
    }

    export class IndexController implements IIndexController {
        static $inject = ['$scope', '$state', 'authService', 'jukeboxWebPaths'];

        public authentication: Models.Account.Authentication;
        
        constructor(private $scope: IIndexScope, private $state: angular.ui.IStateService, private authService: Services.IAuthService, private jukeboxWebPaths: Constants.JukeboxWebPaths) {
            $scope.viewModel = this;

            this.authentication = authService.authentication;
        }

        private redirectToLogin() {
            this.authService.logOut();
            // this.$state.go(this.jukeboxWebPaths.accountLogin.state);
        }
    }
}