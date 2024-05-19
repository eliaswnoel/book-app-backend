const express = require('express')
const router = express.Router()

const wishlistRouter = require('../controllers/wishlist')

//book routes
router.get('/', wishlistRouter.index)
router.post('/', wishlistRouter.create)
router.get('/:id', wishlistRouter.show)
router.delete('/:id', wishlistRouter.delete)
router.put('/:id', wishlistRouter.update)




module.exports = router