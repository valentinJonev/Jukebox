/// <reference path="../_all.ts" />
var Jukebox;
(function (Jukebox) {
    var Player;
    (function (Player) {
        var Controllers;
        (function (Controllers) {
            'use strict';
            var HomeController = (function () {
                function HomeController($rootScope, $scope, $http, $state, jukeboxWebPaths, jukeboxServiceUrls, Hub, $uibModal, hubService, authService) {
                    var _this = this;
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
                    this.handlePlay = function (audio_url) {
                        _this.audio = new Audio(audio_url);
                        _this.audio.play();
                    };
                    this.handlePause = function (secondPlayer) {
                        _this.audio.pause();
                    };
                    $scope.controller = this;
                    this.createUsersHub();
                }
                HomeController.prototype.createUsersHub = function () {
                    var _this = this;
                    this.usersHub = this.hubService.startHub("UsersListHub", {
                        rootPath: this.jukeboxServiceUrls.authenticationServiceUrl + "/signalr",
                        logging: false,
                        listeners: {
                            'handlePlay': this.handlePlay,
                            'handlePause': this.handlePause
                        }
                    });
                    this.$scope.$on('$stateChangeStart', function () {
                        _this.usersHub.disconnect();
                    });
                };
                HomeController.$inject = ['$rootScope', '$scope', '$http', '$state', 'jukeboxWebPaths', 'jukeboxServiceUrls', 'Hub', '$uibModal', 'hubService', 'authService'];
                return HomeController;
            })();
            Controllers.HomeController = HomeController;
        })(Controllers = Player.Controllers || (Player.Controllers = {}));
    })(Player = Jukebox.Player || (Jukebox.Player = {}));
})(Jukebox || (Jukebox = {}));
