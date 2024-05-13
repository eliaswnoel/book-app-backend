const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FavoriteSchema = new Schema({
    book: { type: Schema.Types.ObjectId, ref: 'Book' },
});

module.exports = mongoose.model("Favorite", FavoriteSchema)