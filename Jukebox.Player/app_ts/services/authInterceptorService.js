/// <reference path="../_all.ts" />
var Jukebox;
(function (Jukebox) {
    var Player;
    (function (Player) {
        var Services;
        (function (Services) {
            'use strict';
            var AuthInterceptorService = (function () {
                function AuthInterceptorService($q, $rootScope, $injector, localStorageService, jukeboxWebPaths) {
                    var _this = this;
                    this.$q = $q;
                    this.$rootScope = $rootScope;
                    this.$injector = $injector;
                    this.localStorageService = localStorageService;
                    this.jukeboxWebPaths = jukeboxWebPaths;
                    this.request = function (config) {
                        config.headers = config.headers || {};
                        var authData = _this.getAuthService().authorizationData.getData();
                        if (authData) {
                            config.headers['Authorization'] = 'Bearer ' + authData.access_token;
                        }
                        return config;
                    };
                    this.responseError = function (rejection) {
                        if (rejection.status === 401 || _this.$rootScope.controller.hasRemoteTokenRequestFailed(rejection)) {
                        }
                        return _this.$q.reject(rejection);
                    };
                }
                AuthInterceptorService.Factory = function ($q, $rootScope, $injector, localStorageService, jukeboxWebPaths) {
                    return new AuthInterceptorService($q, $rootScope, $injector, localStorageService, jukeboxWebPaths);
                };
                AuthInterceptorService.prototype.retryRequest = function (config, deferred) {
                    function successCallback(response) {
                        deferred.resolve(response);
                    }
                    function errorCallback(response) {
                        deferred.reject(response);
                    }
                    this.get$http()(config).then(successCallback, errorCallback);
                };
                AuthInterceptorService.prototype.get$http = function () {
                    return this.$injector.get('$http');
                };
                AuthInterceptorService.prototype.getAuthService = function () {
                    return this.$injector.get('authService');
                };
                AuthInterceptorService.prototype.get$state = function () {
                    return this.$injector.get('$state');
                };
                AuthInterceptorService.$inject = ['$q', '$rootScope', '$injector', 'localStorageService', 'jukeboxWebPaths'];
                AuthInterceptorService.TOKEN_HEADERS = { 'Content-Type': 'application/x-www-form-urlencoded' };
                return AuthInterceptorService;
            })();
            Services.AuthInterceptorService = AuthInterceptorService;
        })(Services = Player.Services || (Player.Services = {}));
    })(Player = Jukebox.Player || (Jukebox.Player = {}));
})(Jukebox || (Jukebox = {}));
