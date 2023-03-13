const async = require('async');

async.waterfall([
    function(callback) {
        setTimeout(()=>{
            console.log('first to print');
            callback(null,'first' )
        }, 2000)
    },
    
    function(arg1, callback)   {
        setTimeout(()=>{
            console.log('secnd to print');
            callback(null, 'second' )
        }, 2000)
    },
    
    function(arg2, callback ) {
        setTimeout(()=>{
            console.log('third to print');
            callback(null, 'third' )
        }, 2000)
    },
    
    
], function(err, result) {
    if(err) {
        console.error('Error', err);
    } else {
        console.log('result', result);
    }
})