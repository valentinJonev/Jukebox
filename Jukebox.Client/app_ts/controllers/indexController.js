/// <reference path="../_all.ts" />
var Jukebox;
(function (Jukebox) {
    var Player;
    (function (Player) {
        var Controllers;
        (function (Controllers) {
            'use strict';
            var IndexController = (function () {
                function IndexController($scope, $state, authService, jukeboxWebPaths) {
                    this.$scope = $scope;
                    this.$state = $state;
                    this.authService = authService;
                    this.jukeboxWebPaths = jukeboxWebPaths;
                    $scope.viewModel = this;
                    this.authentication = authService.authentication;
                }
                IndexController.prototype.redirectToLogin = function () {
                    this.authService.logOut();
                    // this.$state.go(this.jukeboxWebPaths.accountLogin.state);
                };
                IndexController.$inject = ['$scope', '$state', 'authService', 'jukeboxWebPaths'];
                return IndexController;
            })();
            Controllers.IndexController = IndexController;
        })(Controllers = Player.Controllers || (Player.Controllers = {}));
    })(Player = Jukebox.Player || (Jukebox.Player = {}));
})(Jukebox || (Jukebox = {}));