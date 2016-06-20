module Jukebox.Player.Constants {
    'use strict';

    export class UrlState {
        url: string;
        state: string;
    }

    export class JukeboxWebPaths {
        home: UrlState;

        constructor() {
            this.home = { url: '/home', state: 'home' };
        }
    }

    export class JukeboxViewPaths {
        home: string;

        constructor() {
            this.home = './views/home.html';
        }
    }
}