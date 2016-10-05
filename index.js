const express = require('express');
const path = require('path');

const app = express();

app.set('port', (process.env.PORT || 3000));

app.use(express.static(path.join(__dirname, 'client/')));

app.listen(app.get('port'), () => {
  console.log("Server has started.");
});

