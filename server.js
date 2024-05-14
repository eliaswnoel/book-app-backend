require("dotenv").config();
require('./config/db.connection.js')


const { PORT } = process.env;
const express = require("express");
const app = express();
//TODO: look into thos some more
const cors = require('cors');
const morgan = require('morgan')
const bookRouter = require('./routes/books')
const listRouter = require('./routes/lists')

// TODO:
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({
    origin:"*"
  }))
app.use(morgan('dev'))
app.use('/books', bookRouter)
app.use('/log', listRouter)
app.use('/wishlist', listRouter)



// create a test route
app.get("/", (req, res) => {
    res.send("hello world");
});

// LISTENER
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
