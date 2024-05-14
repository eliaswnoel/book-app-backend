const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookSchema = new Schema ({
    name: String,
    image: String, //image URLs
    summary: String,
    rating: {
        type: Number,
        min: 1,
        max: 5
    }
}, { timestamps: true });

module.exports = mongoose.model("Book", BookSchema)