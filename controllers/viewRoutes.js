const router = require('express').Router();
const { User, Review, Category } = require('../models');
const withAuth = require('../utils/auth');

// homepage
router.get('/', async (req, res) => {
  try {
    let reviews = await Review.findAll({
      include: [Category, User],
      order: [['date_created', 'DESC']]
    })
    reviews = reviews.map(review => review.get({plain: true}))

    res.render('homepage', {
      reviews,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// board games
router.get('/boardgame', withAuth, async (req, res) => {
  try {
    let boardGameReviews = await Review.findAll({
      where: {
        category_id: 1,
      },
      include: [Category, User]
    });
    boardGameReviews = boardGameReviews.map(review => {
      return {
        ...review.get({ plain: true }),
        logged_in: req.session.logged_in
      }
    })
    

    res.render('boardgame', {
      boardGameReviews,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// card games
router.get('/cardgame', withAuth, async (req, res) => {
  try {
    let cardGameReviews = await Review.findAll({
      where: {
        category_id: 2,
      },
      include: [Category, User]
    });
    cardGameReviews = cardGameReviews.map(review => {
      return {
        ...review.get({ plain: true }),
        logged_in: req.session.logged_in
      }
    })
    
    res.render('cardgame', {
      cardGameReviews,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// video games
router.get('/videogame', withAuth, async (req, res) => {
  try {
    let videoGameReviews = await Review.findAll({
      where: {
        category_id: 3,
      },
      include: [Category, User]
    });
    videoGameReviews = videoGameReviews.map(review => {
      return {
        ...review.get({ plain: true }),
        logged_in: req.session.logged_in
      }
    })
    
   
    res.render('videogame', {
      videoGameReviews,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// dashboard
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    let reviews = await Review.findAll({
      where: {
        user_id: req.session.user_id
      },
      include: [User, Category]
    })
    reviews = reviews.map(review => {
      
      return {
        ...review.get({ plain: true }),
        logged_in: req.session.logged_in
      }
    })

    res.render('dashboard', {
      reviews,
      logged_in: req.session.logged_in,
    })
  } catch (err) {
    res.status(500).json(err)
  }
});

// create post
router.get('/create', withAuth, async (req, res) => {
  try {
    let user = await User.findOne({
      where: {
        id: req.session.user_id
      }
     })
    user = user.get({ plain: true })

    res.render('createview', {
      user,
      logged_in: req.session.logged_in,
    })
  } catch (err) {
    res.status(500).json(err)
  }
})

// edit view
router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    let review = await Review.findOne({
      where: {
        id: req.params.id
      },
      include: [User, Category]
     })
    review = review.get({ plain: true })
    
    res.render('editview', {
      review,
      logged_in: req.session.logged_in,
    })
  } catch (err) {
    res.status(500).json(err)
  }
})


router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
