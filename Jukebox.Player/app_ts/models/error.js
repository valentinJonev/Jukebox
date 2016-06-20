var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Jukebox;
(function (Jukebox) {
    var Player;
    (function (Player) {
        var Models;
        (function (Models) {
            var Error;
            (function (Error) {
                'use strict';
                var BaseApiError = (function () {
                    function BaseApiError() {
                    }
                    return BaseApiError;
                })();
                Error.BaseApiError = BaseApiError;
                var BadRequestApiError = (function (_super) {
                    __extends(BadRequestApiError, _super);
                    function BadRequestApiError() {
                        _super.apply(this, arguments);
                    }
                    return BadRequestApiError;
                })(BaseApiError);
                Error.BadRequestApiError = BadRequestApiError;
                var AuthError = (function () {
                    function AuthError() {
                    }
                    return AuthError;
                })();
                Error.AuthError = AuthError;
                var BadRequest = (function () {
                    function BadRequest() {
                    }
                    return BadRequest;
                })();
            })(Error = Models.Error || (Models.Error = {}));
        })(Models = Player.Models || (Player.Models = {}));
    })(Player = Jukebox.Player || (Jukebox.Player = {}));
})(Jukebox || (Jukebox = {}));
