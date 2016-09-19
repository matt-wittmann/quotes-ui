(function (exports) {
    "use strict";

    exports.retrieveQuotes = function retrieveQuotes() {
        return Promise.resolve(
            [
                {
                    quote: "Hello, world!",
                    attribution: "Anonymous"
                },
                {
                    quote: "There are only two hard things in computer science: cache invalidation and naming things.",
                    attribution: "Phil Karlton"
                },
                {
                    quote: "Innovation distinguishes between a leader and a follower.",
                    attribution: "Steve Jobs"
                },
                {
                    quote: "640 kb ought to be enough for anybody.",
                    attribution: "Bill Gates"
                },
                {
                    quote: "To thine own self be true.",
                    attribution: "William Shakespeare"
                }
            ]);
    };
}(this.Quotes = {}));