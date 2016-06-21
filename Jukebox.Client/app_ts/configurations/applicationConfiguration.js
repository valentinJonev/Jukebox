/// <reference path="../_all.ts" />
var Jukebox;
(function (Jukebox) {
    var Client;
    (function (Client) {
        var Configurations;
        (function (Configurations) {
            'use strict';
            //TODO: find interface
            function configureLoadingBar(cfpLoadingBarProvider) {
                cfpLoadingBarProvider.includeSpinner = false;
            }
            Configurations.configureLoadingBar = configureLoadingBar;
        })(Configurations = Client.Configurations || (Client.Configurations = {}));
    })(Client = Jukebox.Client || (Jukebox.Client = {}));
})(Jukebox || (Jukebox = {}));
