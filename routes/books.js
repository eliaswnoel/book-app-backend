const express = require('express')
const router = express.Router()

const bookRouter = require('../controllers/books')

router.get('/', bookRouter.index)
router.post('/', bookRouter.create)
router.get('/:id', bookRouter.show)

module.exports = router