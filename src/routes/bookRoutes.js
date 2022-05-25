/* eslint-disable import/newline-after-import */
const express = require('express');
const controller = require('../controllers/booksController');
const bookRoutes = express.Router();

bookRoutes.get('/books', controller.showBooks);

bookRoutes.get('/books/new', controller.showNewBooks);

bookRoutes.post('/books/new', controller.postNewBooks);

module.exports = bookRoutes;

// POST /books/new
// validate req.body
// title - string, min 3, privalomas
// author - string, min 3, privalomas
// year - number, 4 skaiciai, min 1900, max 2030, privalomas
// category - number, 1 skaicius, min 1900, max 2030, privaloams
