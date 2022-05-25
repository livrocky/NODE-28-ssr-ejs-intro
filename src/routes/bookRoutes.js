/* eslint-disable import/newline-after-import */
/* eslint-disable object-curly-newline */
/* eslint-disable one-var */
/* eslint-disable one-var-declaration-per-line */
const express = require('express');
const controller = require('../controllers/booksController');
const bookRoutes = express.Router();

// GET /books - render books page = sukurti ir atvaizduoti books.ejs
bookRoutes.get('/books', controller.showBooks);

// GET /new-book - render new-book.ejs kuriame yra forma sukurti naujai knygai

bookRoutes.get('/books/new', controller.showNewBooks);

bookRoutes.post('/books/new', controller.postNewBooks);

module.exports = bookRoutes;
