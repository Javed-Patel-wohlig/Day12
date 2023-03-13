const async = require('async');

const arr1 = ['hello', 'javed'];
const arr2 = [ 'you', 'look', 'nice'];

const getUpperCase = (arr, callback)=>{
    setTimeout(()=>{
        const result = arr.map( i => i.toUpperCase())
        callback(null, result)
    }, 1000)
}

async.concatSeries([arr1, arr2], getUpperCase,function(err, result) {
    console.log(result)
})