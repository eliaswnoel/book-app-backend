const express = require('express')
const router = express.Router()

const authRouter = require('../controllers/AuthController')


router.post('/login', authRouter.Login);
router.post('/register', authRouter.Register);
router.post('/session', authRouter.Session)








module.exports = router