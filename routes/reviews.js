const express = require('express')
const router = express.Router()

const reviewRouter = require('../controllers/reviews')

//book routes
router.get('/', reviewRouter.index)
router.post('/', reviewRouter.create)
router.get('/:id', reviewRouter.show)
router.delete('/:id', reviewRouter.delete)
router.put('/:id', reviewRouter.update)




module.exports = router