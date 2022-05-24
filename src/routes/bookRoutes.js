const express = require('express');

const bookRoutes = express.Router();

// GET /books - render books page = sukurti ir atvaizduoti books.ejs
bookRoutes.get('/books', async (req, res) => {
  const locals = {
    currentPage: 'books',
    title: 'Books',
  };
  res.render('books', locals);
});

module.exports = bookRoutes;
