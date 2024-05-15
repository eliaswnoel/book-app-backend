const express = require('express')
const router = express.Router()

const bookRouter = require('../controllers/books')

//book routes
router.get('/', bookRouter.index)
router.post('/', bookRouter.create)
router.get('/:id', bookRouter.show)
router.delete('/:id', bookRouter.delete);




module.exports = router