/// <reference path="../_all.ts" />
var Jukebox;
(function (Jukebox) {
    var Client;
    (function (Client) {
        var Configurations;
        (function (Configurations) {
            'use strict';
            function configureLocalStorage(localStorageServiceProvider) {
                localStorageServiceProvider
                    .setPrefix('jukebox-web')
                    .setStorageType('localStorage');
            }
            Configurations.configureLocalStorage = configureLocalStorage;
        })(Configurations = Client.Configurations || (Client.Configurations = {}));
    })(Client = Jukebox.Client || (Jukebox.Client = {}));
})(Jukebox || (Jukebox = {}));
