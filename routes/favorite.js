const express = require('express')
const router = express.Router()
const favoriteRouter = require('../controllers/favorite')

router.get('/', favoriteRouter.index)
router.post('/', favoriteRouter.create)
router.get('/:id', favoriteRouter.show)
router.delete('/:id', favoriteRouter.delete)
router.put('/:id', favoriteRouter.update);


module.exports = router;


