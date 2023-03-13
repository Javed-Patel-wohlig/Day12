const async = require('async');
const axios = require('axios');

async.parallel({
  london: function(callback) {
    axios.get('http://api.weatherapi.com/v1/current.json?key=b44989c08d314d1bb7580747231303&q=London&aqi=no')
      .then(response => {
        callback(null, response.data);
      })
      .catch(error => {
        callback(error);
      });
  },
  paris: function(callback) {
    axios.get('http://api.weatherapi.com/v1/current.json?key=b44989c08d314d1bb7580747231303&q=Paris&aqi=no')
      .then(response => {
        callback(null, response.data);
      })
      .catch(error => {
        callback(error);
      });
  },
  newyork: function(callback) {
    axios.get('http://api.weatherapi.com/v1/current.json?key=b44989c08d314d1bb7580747231303&q=New York&aqi=no')
      .then(response => {
        callback(null, response.data);
      })
      .catch(error => {
        callback(error);
      });
  }
}, function(err, results) {
  if(err) {
    console.error(err.message);
  } else {
    console.log(results);
  }
});
