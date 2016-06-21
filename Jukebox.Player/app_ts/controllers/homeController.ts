/// <reference path="../_all.ts" />

module Jukebox.Player.Controllers {
    'use strict';

    export interface IHomeScope extends angular.IScope {
        controller: IHomeController;
    }

    export interface IHomeController {
        jukeboxWebPaths: Constants.JukeboxWebPaths;
    }

    export class HomeController implements IHomeController {
        static $inject = ['$rootScope', '$scope', '$http', '$state', 'jukeboxWebPaths', 'jukeboxServiceUrls', 'Hub', '$uibModal', 'hubService', 'authService'];
        
        private usersHub: ngSignalr.Hub;
        private audio: HTMLAudioElement;

        constructor(private $rootScope: IRootScope, private $scope: IHomeScope,
            private $http: angular.IHttpService, private $state: angular.ui.IStateService,
            public jukeboxWebPaths: Constants.JukeboxWebPaths, private jukeboxServiceUrls: Constants.JukeboxServiceUrls,
            private Hub: ngSignalr.HubFactory, private $uibModal: angular.ui.bootstrap.IModalService,
            private hubService: Services.HubService, private authService: Services.IAuthService) {
            $scope.controller = this;

            this.createUsersHub();
        }

        private createUsersHub(): void {
            this.usersHub = this.hubService.startHub("UsersListHub", {
                rootPath: this.jukeboxServiceUrls.authenticationServiceUrl + "/signalr",
                logging: false,
                listeners: {
                    'handlePlay': this.handlePlay,
                    'handlePause': this.handlePause
                }
            });

            this.$scope.$on('$stateChangeStart', () => {
                this.usersHub.disconnect();
            });
        }

        private handlePlay = (audio_url: string) => {
            this.audio = new Audio(audio_url);
            this.audio.play();
        }

        private handlePause = (secondPlayer: Models.Account.UserListModel) => {
            this.audio.pause();
        }
    }
}