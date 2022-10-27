const { unlink } = require('fs');

unlink('hello.txt', (err) => {
  if (err) {
    console.error(err);
  }
  console.log('File deleted!');
});
