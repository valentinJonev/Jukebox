/// <reference path="../_all.ts" />

module Jukebox.Player.Configurations {
    'use strict';
    
    export function configureLocalStorage(localStorageServiceProvider: angular.local.storage.ILocalStorageServiceProvider) {
        localStorageServiceProvider
            .setPrefix('ships-web')
            .setStorageType('localStorage');
    }
}