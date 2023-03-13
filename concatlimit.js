const async = require('async');

function getUserPosts(userId, callback) {
  // simulate fetching user posts from a database
  setTimeout(() => {
    const userPosts = [
      {id: 1, title: 'First post', body: 'This is the first post.'},
      {id: 2, title: 'Second post', body: 'This is the second post.'},
      {id: 3, title: 'Third post', body: 'This is the third post.'},
      {id: 4, title: 'Fourth post', body: 'This is the fourth post.'},
      {id: 5, title: 'Fifth post', body: 'This is the fifth post.'}
    ];
    callback(null, userPosts);
  }, 2000);
}

const userId = 123;
const limit = 2;

async.concatLimit([1, 2, 3, 4, 5], limit, (number, callback) => {
  getUserPosts(userId, (err, userPosts) => {
    if (err) {
      callback(err);
    } else {
      const posts = userPosts.map(post => {
        post.userId = userId;
        return post;
      });
      callback(null, posts);
    }
  });
}, (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log('All posts:', result);
  }
});
