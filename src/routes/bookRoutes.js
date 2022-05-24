/* eslint-disable one-var */
/* eslint-disable one-var-declaration-per-line */
const express = require('express');
const { getAllBooks, addBook } = require('../model/bookModel');

const bookRoutes = express.Router();

// GET /books - render books page = sukurti ir atvaizduoti books.ejs
bookRoutes.get('/books', async (req, res) => {
  console.log('req.body===', req.body);
  // const result = await addBook()

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

// GET /new-book - render new-book.ejs kuriame yra forma sukurti naujai knygai

bookRoutes.get('/books/new', async (req, res) => {
  const locals = {
    currentPage: 'new-form',
    title: 'Lets create a new book',
  };
  res.render('new-book', locals);
});

bookRoutes.post('/books/new', async (req, res) => {
  console.log('req.body===', req.body);
  const { title, author, year, category } = req.body;
  const result = await addBook(title, author, year, category);
  console.log('result===', result);
  const feedback = result.affectedRows === 1 ? 'Success' : 'Error';
  const locals = {
    currentPage: 'new-form',
    title: 'Lets create a new book',
    feedback,
  };
  res.render('new-book', locals);
});

module.exports = bookRoutes;
