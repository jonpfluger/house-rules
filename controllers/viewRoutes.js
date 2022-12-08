const router = require('express').Router();
const { User, Review, Category } = require('../models');
const withAuth = require('../utils/auth');

// boardgame reviews
// card game reviews
// video game reviews


router.get('/', async (req, res) => {
  try {
    let boardGameReviews = await Review.findAll({
      where: {
        category_id: 1,
      },
      include:[Category, User]
    });

    boardGameReviews = boardGameReviews.map((review) => review.get({ plain: true }));
    
    let cardGameReviews = await Review.findAll({
      where: {
        category_id: 2,
      },
      include: [Category, User]
    });
    cardGameReviews = cardGameReviews.map((review) => review.get({ plain: true }));
    
    let videoGameReviews = await Review.findAll({
      where: {
        category_id: 3,
      },
      include: [Category, User]
    });
    videoGameReviews = videoGameReviews.map((review) => review.get({ plain: true }));
    
    res.render('homepage', {
      boardGameReviews,
      cardGameReviews,
      videoGameReviews,
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
