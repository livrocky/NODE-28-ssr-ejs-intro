/* eslint-disable object-curly-newline */
/* eslint-disable one-var */
/* eslint-disable one-var-declaration-per-line */
const { getAllBooks, addBook } = require('../model/bookModel');

const showBooks = async (req, res) => {
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
};

const showNewBooks = async (req, res) => {
  const locals = {
    currentPage: 'new-form',
    title: 'Lets create a new book',
  };
  res.render('new-book', locals);
};

const postNewBooks = async (req, res) => {
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
};

module.exports = {
  showBooks,
  showNewBooks,
  postNewBooks,
};
