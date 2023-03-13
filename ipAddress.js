const dns = require('dns');

dns.lookup('www.google.com',(err, address, family) => {
    console.log(err);
    console.log(address);
})