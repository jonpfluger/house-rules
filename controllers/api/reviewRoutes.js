const router = require('express').Router();
const { Review } = require('../../models');


//post route

router.post('/', async (req, res) => {
    try {
        const review = await Review.create({
            ...req.body, 
            user_id: req.session.user_id
        })
        res.status(200).json(review)

    } catch (err) {
        res.status(400).json(err)
    }
})

//Put
//Delete



module.exports = router;