// Create a more complex HTTP server using Node's HTTP module
const http = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('Hello Holberton School!');
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2])
      .then((data) => {
        res.end(data.join('\n'));
      })
      .catch((err) => {
        res.end(err.message);
      });
  }
});

app.listen(port);

module.exports = app;
