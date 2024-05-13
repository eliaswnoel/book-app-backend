const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WishlistSchema = new Schema({
    book: { type: Schema.Types.ObjectId, ref: 'Book' },
});

module.exports = mongoose.model("Wishlist", WishlistSchema)