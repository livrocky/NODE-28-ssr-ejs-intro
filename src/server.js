const express = require('express');
const app = express();
const path = require('path');

const PORT = 3007;

// Set default view engine default view directory /views
app.set('view engine', 'ejs');
// kelias iki views direktorijos nuo root
app.set('views', 'src/views');

// static directory
const staticDir = path.join(__dirname, 'assets');
app.use(express.static(staticDir));

app.get('/', function (req, res) {
  //   const pathToIndex = path.join(__dirname, 'views', 'index.html');
  //   res.sendFile(pathToIndex);
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.listen(PORT, () => console.log('listening on port', PORT));
