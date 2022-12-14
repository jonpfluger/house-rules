const router = require('express').Router()
const path = require('path')

router.get('/anime.min.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../../node_modules/animejs/lib/anime.min.js'))
})

module.exports = router