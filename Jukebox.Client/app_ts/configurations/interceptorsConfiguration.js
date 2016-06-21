/// <reference path="../_all.ts" />
var Jukebox;
(function (Jukebox) {
    var Client;
    (function (Client) {
        var Configurations;
        (function (Configurations) {
            'use strict';
            function confugreInterceptoprs($httpProvider) {
                $httpProvider.interceptors.push(Client.Services.AuthInterceptorService.Factory);
            }
            Configurations.confugreInterceptoprs = confugreInterceptoprs;
        })(Configurations = Client.Configurations || (Client.Configurations = {}));
    })(Client = Jukebox.Client || (Jukebox.Client = {}));
})(Jukebox || (Jukebox = {}));
