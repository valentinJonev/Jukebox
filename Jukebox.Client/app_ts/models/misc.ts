module Jukebox.Client.Models.Misc {
    'use strict';

    export class ErrorModel {
        constructor(public message: string, public errorList: string[]) {
        }
    }
}

