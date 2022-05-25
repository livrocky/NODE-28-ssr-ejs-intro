const showHomePage = (req, res) => {
  // get info from db
  const tech = ['Html', 'Css', 'Js'];
  const data = {
    tech,
    title: 'Welcome',
    currentPage: 'home',
  };
  res.render('index', data);
};

const showAboutPage = (req, res) => {
  const data = {
    title: 'About Us',
    currentPage: 'about',
  };
  res.render('about', data);
};

const showContactPage = (req, res) => {
  const locals = {
    title: 'Contact Us',
    currentPage: 'contact',
  };
  // res.render('failo pavadinimas views directory be ejs', kintamuju objektas)
  res.render('contact', locals);
};

module.exports = {
  showHomePage,
  showAboutPage,
  showContactPage,
};
