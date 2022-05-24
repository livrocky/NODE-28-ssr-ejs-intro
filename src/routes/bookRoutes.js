/* eslint-disable one-var */
/* eslint-disable one-var-declaration-per-line */
const express = require('express');
const { getAllBooks } = require('../model/bookModel');

const bookRoutes = express.Router();

// GET /books - render books page = sukurti ir atvaizduoti books.ejs
bookRoutes.get('/books', async (req, res) => {
  let allBooksArr, feedback;
  try {
    allBooksArr = await getAllBooks();
  } catch (error) {
    console.log(error);
    feedback = 'Something went wrong';
  }
  const locals = {
    currentPage: 'books',
    title: 'Books',
    allBooksArr,
    feedback,
  };
  res.render('books', locals);
});

module.exports = bookRoutes;
