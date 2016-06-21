/// <reference path="../_all.ts" />

module Jukebox.Client.Configurations {
    'use strict';
    
    export function configureLocalStorage(localStorageServiceProvider: angular.local.storage.ILocalStorageServiceProvider) {
        localStorageServiceProvider
            .setPrefix('jukebox-web')
            .setStorageType('localStorage');
    }
}