// Create web server
// Create a web server that listens to requests on port 3000 and returns the content of comments.js when the path is /comments.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/comments') {
    fs.readFile('./comments.js', 'utf8', (err, data) => {
      res.write(data);
      res.end();
    });
  }
});

server.listen(3000);
console.log('Listening on port 3000');