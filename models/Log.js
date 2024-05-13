const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LogSchema = new Schema({
    book: { type: Schema.Types.ObjectId, ref: 'Book' },
});

module.exports = mongoose.model("Log", LogSchema)