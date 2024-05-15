const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WishlistSchema = new Schema ({
    title: String,
    author: String, 
    image: String, //image URLs
}, { timestamps: true });

module.exports = mongoose.model("Wishlist", WishlistSchema)