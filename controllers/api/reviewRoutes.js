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
router.put('/:id', async (req, res) => {
    try {
        const updatedPost = await Review.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(updatedPost)
    } catch (err) {
        res.status(400).json(err);
    }
})

//Delete
router.delete('/:id', async (req, res) => {
    try {
        const deletedPost = await Review.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            }
        })

        res.status(200).json(deletedPost)
    } catch (err) {
        res.status(500).json(err)
    }
})



module.exports = router;