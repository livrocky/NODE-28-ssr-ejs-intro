const express = require('express');
const app = express();
const path = require('path');

const PORT = 3007;

// static directory
const staticDir = path.join(__dirname, 'assets');
app.use(express.static(staticDir));

app.get('/', function (req, res) {
  const pathToIndex = path.join(__dirname, 'views', 'index.html');
  res.sendFile(pathToIndex);
});

app.get('/about', (req, res) => {
  const pathToAbout = path.join(__dirname, 'views', 'about.html');
  res.sendFile(pathToAbout);
});

app.listen(PORT, () => console.log('listening on port', PORT));
