var Jukebox;
(function (Jukebox) {
    var Client;
    (function (Client) {
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
        })(Models = Client.Models || (Client.Models = {}));
    })(Client = Jukebox.Client || (Jukebox.Client = {}));
})(Jukebox || (Jukebox = {}));
