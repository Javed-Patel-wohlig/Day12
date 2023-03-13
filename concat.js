const async = require('async');

const arr1 = ['hello', 'world'];
const arr2 = [ 'javed', 'patel'];

const getUpperCase = (arr, callback)=>{
    const result = arr.map( i => i.toUpperCase())
    callback(null, result)
}

async.concat([arr1, arr2], getUpperCase, function(err, result) {
    if (err){
        console.log(err);
    }
    console.log(result);
})