const async = require('async');

async.concatSeries([
    function first(callback) {
        setTimeout(() => {
            callback(null, [1, 2, 3]);
        }, 1000);
    },
    function second(callback) {
        setTimeout(() => {
            callback(null, [4, 5, 6]);
        }, 2000);
    },
    function third(callback) {
        setTimeout(() => {
            callback(null, [7, 8, 9]);
        }, 500);
    }
], function(err, result) {
    if (err) {
        console.error(err);
    } else {
        console.log(result);
    }
});
