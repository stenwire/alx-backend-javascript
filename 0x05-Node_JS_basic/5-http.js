const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const msg = 'This is the list of our students\n';
    countStudents(process.argv[2]).then((data) => {
      res.end(msg + data);
    }).catch(() => {
      res.statusCode = 500;
      res.end(`${msg}Cannot load the database`);
    });
  }
});

app.listen(1245);

module.exports = app;
