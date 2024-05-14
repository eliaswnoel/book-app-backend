const express = require('express')
const router = express.Router()


const listRouter = require('../controllers/lists')

//wishlist routes
router.get('/wishlist', listRouter.addToWishlist)
router.post('/wishlist', listRouter.addToWishlist)

//log routes
router.get('/log', listRouter.addToLog)
router.post('/log', listRouter.addToLog)


module.exports = router

