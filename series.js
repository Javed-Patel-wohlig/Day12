// // real life example for scrapping the movie link

const async = require('async');
const request = require('request');
const cheerio = require('cheerio');

const urls = [
  'https://example.com/page1',
  'https://example.com/page2',
  'https://example.com/page3',
  'https://www.bbc.com/news'
];

// // Scrapes a page and returns the data
function scrapePage(url, callback) {
  request(url, function(error, response, html) {
    if (error) {
      return callback(error);
    }

    const $ = cheerio.load(html);
    const data = {
      title: $('title').text(),
      content: $('title').text()
    };

    callback(null, data);
  });
}

// // Scrapes all the pages in order
async.series([
  function scrapeFirstPage(callback) {
    scrapePage(urls[0], callback);
  },
  function scrapeSecondPage(callback) {
    scrapePage(urls[1], callback);
  },
  function scrapeThirdPage(callback) {
    scrapePage(urls[2], callback);
  },
  function scrapeForthPage(callback) {
    scrapePage(urls[3], callback);
  }
], function(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log('Scraped all pages:', results);
  }
});


//simple example

// const async = require('async');

// async.series([
//   function task1(callback) {
//     setTimeout(function() {
//       console.log('Task 1 is completed');
//       callback(null, 'Result 1');
//     }, 2000);
//   },
//   function task2(callback) {
//     setTimeout(function() {
//       console.log('Task 2 is completed');
//       callback(null, 'Result 2');
//     }, 1000);
//   }
// ], function(err, results) {
//     if(err) {
//         console.error(err);
//     } else {
//         console.log('All tasks are completed:', results);
//     }
// });
