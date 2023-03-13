const async = require('async');
const fs = require('fs');
const request = require('request');

const filesToUpload = ['./images/file1.jpg', 'file2.jpg', 'file3.jpg'];

async.everySeries(filesToUpload, function(file, callback) {
  // Read the contents of the file
  fs.readFile(file, function(err, data) {
    if (err) {
      callback(err);
    } else {
      // Make a request to upload the file
      request.post({
        url: 'https://example.com/upload',
        body: data
      }, function(err, response, body) {
        if (err) {
          callback(err);
        } else {
          // Check that the upload was successful
          if (response.statusCode === 200) {
            callback(null, true);
          } else {
            callback(new Error('Upload failed'));
          }
        }
      });
    }
  });
}, function(err, result) {
  if (err) {
    console.error(err);
  } else {
    console.log('All files uploaded successfully');
  }
});


//second example

// const async = require('async');

async.everySeries([
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Bob', age: 20 }
], function(item, callback) {
  // Check if the age of each item is greater than or equal to 20
  if (item.age >= 20) {
    callback(null, true);
  } else {
    callback(null, false);
  }
}, function(err, result) {
  if (err) {
    console.error(err);
  } else {
    console.log('All items passed the test:', result); // Output: All items passed the test: true
  }
});

//third example

// const async = require('async');

const tasks = [1, 2, 3, 4, 5];

async.everySeries(tasks, (task, callback) => {
  setTimeout(() => {
    if (task % 2 === 0) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  }, 1000);
}, (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log(result);
  }
});

