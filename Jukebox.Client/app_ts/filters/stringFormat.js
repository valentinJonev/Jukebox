var Jukebox;
(function (Jukebox) {
    var Player;
    (function (Player) {
        var Filters;
        (function (Filters) {
            'use strict';
            //TODO: refactor
            function stringFormat() {
                var s = arguments[0];
                for (var i = 0; i < arguments.length - 1; i++) {
                    var reg = new RegExp("\\{" + i + "\\}", "gm");
                    s = s.replace(reg, arguments[i + 1]);
                }
                return s;
            }
            Filters.stringFormat = stringFormat;
            ;
        })(Filters = Player.Filters || (Player.Filters = {}));
    })(Player = Jukebox.Player || (Jukebox.Player = {}));
})(Jukebox || (Jukebox = {}));