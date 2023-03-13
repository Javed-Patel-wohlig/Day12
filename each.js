const async = require('async');

const items = ['item1', 'item2', 'item3'];

async.each(items, function(item, callback) {
  // Perform some asynchronous operation on each item
  console.log(`Processing item: ${item}`);
  setTimeout(() => {
    console.log(`Finished processing item: ${item}`);
    callback();
  }, 3000);
}, function(err) {
  // This function is called after all items have been processed or an error occurs
  if(err) {
    console.error(err);
  } else {
    console.log('All items have been processed successfully');
  }
});
