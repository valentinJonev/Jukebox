var Jukebox;
(function (Jukebox) {
    var Player;
    (function (Player) {
        var Models;
        (function (Models) {
            var Misc;
            (function (Misc) {
                'use strict';
                var ErrorModel = (function () {
                    function ErrorModel(message, errorList) {
                        this.message = message;
                        this.errorList = errorList;
                    }
                    return ErrorModel;
                })();
                Misc.ErrorModel = ErrorModel;
            })(Misc = Models.Misc || (Models.Misc = {}));
        })(Models = Player.Models || (Player.Models = {}));
    })(Player = Jukebox.Player || (Jukebox.Player = {}));
})(Jukebox || (Jukebox = {}));
