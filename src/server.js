/* eslint-disable import/newline-after-import */
const express = require('express');
const app = express();
const path = require('path');
const bookRoutes = require('./routes/bookRoutes');
const pageRoutes = require('./routes/pageRoutes');

const PORT = 3007;

// Set default view engine default view directory /views
app.set('view engine', 'ejs');
// kelias iki views direktorijos nuo root
app.set('views', 'src/views');

// static directory
const staticDir = path.join(__dirname, 'assets');
app.use(express.static(staticDir));

// Routes
app.use('/', pageRoutes);
app.use('/', bookRoutes);

// GET /users - grazins users.ejs psl kuris atvaizduos useriu korteliu pavidalus
// sukuri user.ejs
// exportuoti importuoti users masyva
// paduoti users masyva i user.ejs psl
// user.ejs psl generuoti korteles is masyvo duomenu

app.listen(PORT, () => console.log('listening on port', PORT));
