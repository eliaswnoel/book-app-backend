const express = require('express')
const router = express.Router()


const listRouter = require('../controllers/lists')

//wishlist routes
router.get('/wishlist', listRouter.addToWishlist)
router.post('/wishlist', listRouter.addToWishlist)

//log routes
router.get('/log', listRouter.addToWishlist)
router.post('/log', listRouter.addToWishlist)


module.exports = router

