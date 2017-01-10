(function (Quotes) {
    "use strict";

    function main() {
        var quotesElement = document.getElementById("quotes");
        Elm.Main.embed(quotesElement);
    }

    document.addEventListener("DOMContentLoaded", main);
}(this.Quotes));