const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.write('Hello Holberton School!');
  res.end();
});

app.listen(1245);

module.exports = app;
