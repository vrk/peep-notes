const express = require('express');
const path = require('path');

const app = express();

app.set('port', (process.env.PORT || 3000));

app.use(express.static(path.join(__dirname, 'client/')));

const users = ['John', 'Betty', 'Hal'];
app.get('/api/users', function (req, res) {
  res.json(users);
});

module.exports = app;
