/// <reference path="../_all.ts" />
var Jukebox;
(function (Jukebox) {
    var Client;
    (function (Client) {
        var Controllers;
        (function (Controllers) {
            'use strict';
            var HomeController = (function () {
                function HomeController($rootScope, $scope, $http, $state, jukeboxWebPaths, jukeboxServiceUrls, Hub, $uibModal, hubService, authService) {
                    this.$rootScope = $rootScope;
                    this.$scope = $scope;
                    this.$http = $http;
                    this.$state = $state;
                    this.jukeboxWebPaths = jukeboxWebPaths;
                    this.jukeboxServiceUrls = jukeboxServiceUrls;
                    this.Hub = Hub;
                    this.$uibModal = $uibModal;
                    this.hubService = hubService;
                    this.authService = authService;
                    $scope.controller = this;
                    this.createUsersHub();
                    this.getSongs();
                }
                HomeController.prototype.createUsersHub = function () {
                    var _this = this;
                    this.usersHub = this.hubService.startHub("UsersListHub", {
                        rootPath: this.jukeboxServiceUrls.authenticationServiceUrl + "/signalr",
                        logging: false,
                        methods: ['PlaySong', 'PauseSong']
                    });
                    this.$scope.$on('$stateChangeStart', function () {
                        _this.usersHub.disconnect();
                    });
                };
                HomeController.prototype.getSongs = function () {
                    var _this = this;
                    this.$http.get(this.jukeboxServiceUrls.backendServiceUrl + "/api/music/list")
                        .then(function (result) {
                        _this.songs = result.data;
                    });
                };
                HomeController.prototype.playSong = function (songUrl) {
                    var raspberryId = '23b77463-5c5b-4cd8-90dc-b3a0edf9fa2f';
                    this.usersHub.invoke('PlaySong', raspberryId, songUrl);
                };
                HomeController.prototype.pause = function () {
                    this.usersHub.invoke('PauseSong');
                };
                HomeController.$inject = ['$rootScope', '$scope', '$http', '$state', 'jukeboxWebPaths', 'jukeboxServiceUrls', 'Hub', '$uibModal', 'hubService', 'authService'];
                return HomeController;
            })();
            Controllers.HomeController = HomeController;
        })(Controllers = Client.Controllers || (Client.Controllers = {}));
    })(Client = Jukebox.Client || (Jukebox.Client = {}));
})(Jukebox || (Jukebox = {}));
