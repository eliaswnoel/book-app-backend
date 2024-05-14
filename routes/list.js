const express = require('express')
const router = express.Router()


const listRouter = require('../controllers/lists')


router.get('/', listRouter.getList)
router.post('/', listRouter.addToLog)


module.exports = router