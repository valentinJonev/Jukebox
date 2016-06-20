/// <reference path="../_all.ts" />
var Jukebox;
(function (Jukebox) {
    var Player;
    (function (Player) {
        var Services;
        (function (Services) {
            'use strict';
            var HubService = (function () {
                function HubService($state, jukeboxWebPaths, authService, Hub) {
                    var _this = this;
                    this.$state = $state;
                    this.jukeboxWebPaths = jukeboxWebPaths;
                    this.authService = authService;
                    this.Hub = Hub;
                    this.hasConnectFailed = false;
                    this.onHubConnectSuccess = function (response) {
                        console.log('Now connected, connection ID=' + _this.hub.connection.id);
                    };
                    this.onHubConnectFail = function (promise) {
                        if (promise.context.status == 401) {
                            _this.redirectToLogin();
                        }
                        console.log('Could not connect');
                    };
                }
                HubService.prototype.startHub = function (hubName, options) {
                    var authData = this.authService.authorizationData.getData();
                    var accessToken = authData != null ? authData.access_token : null;
                    if (!options.queryParams) {
                        options.queryParams = {};
                    }
                    options.queryParams['access_token'] = "Bearer " + accessToken;
                    this.hub = new this.Hub(hubName, options);
                    this.createHub();
                    return this.hub;
                };
                HubService.prototype.createHub = function () {
                    this.hub.connect();
                    this.hub.connection.start()
                        .done(this.onHubConnectSuccess)
                        .fail(this.onHubConnectFail);
                };
                HubService.prototype.redirectToLogin = function () {
                    //this.$state.go(this.jukeboxWebPaths.accountLogin.state);
                };
                HubService.$inject = ['$state', 'jukeboxWebPaths', 'authService', 'Hub'];
                return HubService;
            })();
            Services.HubService = HubService;
        })(Services = Player.Services || (Player.Services = {}));
    })(Player = Jukebox.Player || (Jukebox.Player = {}));
})(Jukebox || (Jukebox = {}));
