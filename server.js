require("dotenv").config();
require('./config/db.connection.js')


const { PORT } = process.env;
const express = require("express");
const app = express();
const cors = require('cors');
const morgan = require('morgan')
const bookRouter = require('./routes/books')
const wishlistRouter = require('./routes/wishlist')
const reviewRouter = require('./routes/review.js')
const favoriteRouter = require('./routes/favorite')
const authRouter = require('./routes/auth')


// TODO:
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({
    origin:"*"
  }))
app.use(morgan('dev'))
app.use('/books', bookRouter)
app.use('/wishlist', wishlistRouter)
app.use('/reviews', reviewRouter)
app.use('/favorites', favoriteRouter)
app.use('/auth', authRouter)




// create a test route
app.get("/", (req, res) => {
    res.send("hello world");
});

// LISTENER
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
