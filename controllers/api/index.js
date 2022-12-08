const router = require('express').Router();
const userRoutes = require('./userRoutes');
const categoryRoutes = require('./categoryRoutes')
const reviewRoutes = require('./reviewRoutes')

router.use('/users', userRoutes);
router.use('/category', categoryRoutes)
router.use('/review', reviewRoutes)

module.exports = router;
