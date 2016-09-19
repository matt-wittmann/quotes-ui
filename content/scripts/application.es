(function (Quotes) {
    "use strict";

    function main() {
        var quotesElement = document.getElementById("quotes");
        var template = document.getElementById("template").innerHTML;
        quotesElement.innerHTML = "";

        Quotes.retrieveQuotes().then(function (quotes) {
            quotes.forEach(function (quote) {
                var asHtml = template.replace("{{quote}}", "&#8220;" + quote.quote + "&#8221;")
                                     .replace("{{attribution}}", "—" + quote.attribution);
                quotesElement.insertAdjacentHTML("beforeend", asHtml);
            });
        });
    }

    document.addEventListener("DOMContentLoaded", main);
}(this.Quotes));