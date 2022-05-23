const express = require('express');
const app = express();

const PORT = 3007;

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(PORT, () => console.log('listening on port', PORT));
