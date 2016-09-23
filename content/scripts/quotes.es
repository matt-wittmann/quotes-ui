(function (exports) {
    "use strict";

    exports.retrieveQuotes = function retrieveQuotes() {
        return new Promise(function (resolve, reject) {
            var request = new XMLHttpRequest();
            request.open("GET", "/quotes");
            request.responseType = "json";
            request.onload = function () {
                if (this.status >= 200 && this.status < 300) {
                    resolve(this.response);
                } else {
                    reject(this.statusText);
                }
            };
            request.onerror = function () {
                reject(this.statusText);
            };
            request.send();
        });
    };
}(this.Quotes = {}));