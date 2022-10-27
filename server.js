const { appendFile } = require('fs');

const newContent = '\nThis is some more new text';

appendFile('hi.txt', newContent, (err) => {
  if (err) {
    console.error(err);
  }
  console.log('Content written!');
});
