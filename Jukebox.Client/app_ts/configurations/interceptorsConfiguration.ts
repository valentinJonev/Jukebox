/// <reference path="../_all.ts" />

module Jukebox.Player.Configurations {
    'use strict';

    export function confugreInterceptoprs($httpProvider: angular.IHttpProvider) {
        $httpProvider.interceptors.push(Services.AuthInterceptorService.Factory);
    }
}