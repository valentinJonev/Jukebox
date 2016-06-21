module Jukebox.Player.Constants {
    'use strict';

    export class UrlState {
        url: string;
        state: string;
    }

    export class JukeboxWebPaths {
        accountLogin: UrlState;
        accountRegister: UrlState;
        home: UrlState;

        constructor() {
            this.accountLogin = { url: '/login', state: 'login' };
            this.accountRegister = { url: '/register', state: 'register' };
            this.home = { url: '/home', state: 'home' };
        }
    }

    export class JukeboxViewPaths {
        shared: SharedViewPaths;
        accountLogin: string;
        accountRegister: string;
        home: string;
        error: string;

        constructor() {
            this.shared = { modal: './views/shared/modalTemplate.html' };
            this.accountLogin = './views/account/login.html';
            this.accountRegister = './views/account/register.html';
            this.home = './views/home.html';
            this.error = './views/error.html';
        }
    }

    export class SharedViewPaths {
        modal: string
    }
}