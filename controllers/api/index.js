const router = require('express').Router();
const userRoutes = require('./userRoutes');
const categoryRoutes = require('./categoryRoutes');
const reviewRoutes = require('./reviewRoutes');
const animationRoutes = require('./animationRoutes');

router.use('/users', userRoutes);
router.use('/category', categoryRoutes);
router.use('/review', reviewRoutes);
router.use('/animation', animationRoutes);

module.exports = router;
