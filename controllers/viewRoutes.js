const router = require('express').Router();
const { User, Review, Category } = require('../models');
const withAuth = require('../utils/auth');

// boardgame reviews
// card game reviews
// video game reviews



router.get('/', async (req, res) => {
  try {
    const boardGameReviews = await Review.findAll({
      where: {
        category_id: 1,
      },
      include:[Category, User]
    });
    console.log(boardGameReviews)

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
