/// <reference path="../_all.ts" />

module Jukebox.Client.Controllers {
    'use strict';

    export interface IHomeScope extends angular.IScope {
        controller: IHomeController;
    }

    export interface IHomeController {
        jukeboxWebPaths: Constants.JukeboxWebPaths;
        songs: Models.Client.SongModel[];
    }

    export class HomeController implements IHomeController {
        static $inject = ['$rootScope', '$scope', '$http', '$state', 'jukeboxWebPaths', 'jukeboxServiceUrls', 'Hub', '$uibModal', 'hubService', 'authService'];
        
        private usersHub: ngSignalr.Hub;

        public songs: Models.Client.SongModel[];

        constructor(private $rootScope: IRootScope, private $scope: IHomeScope,
            private $http: angular.IHttpService, private $state: angular.ui.IStateService,
            public jukeboxWebPaths: Constants.JukeboxWebPaths, private jukeboxServiceUrls: Constants.JukeboxServiceUrls,
            private Hub: ngSignalr.HubFactory, private $uibModal: angular.ui.bootstrap.IModalService,
            private hubService: Services.HubService, private authService: Services.IAuthService) {
            $scope.controller = this;

            this.createUsersHub();
            this.getSongs();
        }

        private createUsersHub(): void {
            this.usersHub = this.hubService.startHub("UsersListHub", {
                rootPath: this.jukeboxServiceUrls.authenticationServiceUrl + "/signalr",
                logging: false,
                methods: ['PlaySong', 'PauseSong']
            });

            this.$scope.$on('$stateChangeStart', () => {
                this.usersHub.disconnect();
            });
        }

        private getSongs() {
            this.$http.get<Models.Client.SongModel[]>(this.jukeboxServiceUrls.backendServiceUrl + "/api/music/list")
                .then((result: angular.IHttpPromiseCallbackArg<Models.Client.SongModel[]>) => {
                    this.songs = result.data;
                });
        }

        public playSong(songUrl: string) {
            var raspberryId = '23b77463-5c5b-4cd8-90dc-b3a0edf9fa2f';
            this.usersHub.invoke('PlaySong', raspberryId, songUrl);
        }

        public pause() {
            this.usersHub.invoke('PauseSong');
        }
    }
}