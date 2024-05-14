const express = require('express')
const router = express.Router()


const listRouter = require('../controllers/lists')


router.get('/', listRouter.getList)
router.post('/', listRouter.addToList)


module.exports = router