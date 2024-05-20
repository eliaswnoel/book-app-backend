const express = require('express')
const router = express.Router()
const favoriteRouter = require('../controllers/favorite')

router.post('/favorites', favoriteRouter.addFavorite);
router.delete('/favorites', favoriteRouter.removeFavorite);
router.get('/favorites/:userId', favoriteRouter.getUserFavorites);


module.exports = router;


