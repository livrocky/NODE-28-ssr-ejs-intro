const express = require('express');
const app = express();
const path = require('path');

const PORT = 3007;

app.get('/', function (req, res) {
  const pathToIndex = path.join(__dirname, 'views', 'index.html');
  res.sendFile(pathToIndex);
});

app.listen(PORT, () => console.log('listening on port', PORT));
