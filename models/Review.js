const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReviewSchema = new Schema ({
    title: String,
    image: String, //image URL
    review: String,
    date: { type: Date, default: Date.now },

}, { timestamps: true });

module.exports = mongoose.model("Review", ReviewSchema)