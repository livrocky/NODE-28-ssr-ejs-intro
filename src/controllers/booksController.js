/* eslint-disable one-var */
/* eslint-disable one-var-declaration-per-line */

const { getAllBooks } = require('../model/bookModel');

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

module.exports = {
  showBooks,
};
