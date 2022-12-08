const router = require('express').Router();

const apiRoutes = require('./api');
const viewRoutes = require('./viewRoutes');

router.use('/', viewRoutes);
router.use('/api', apiRoutes);

module.exports = router;
