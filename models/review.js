const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    comment: String,
    rating: {
        type: Number,      // Fixed: was 'tye'
        min: 1,
        max: 5,
    },
    createdAt: {           // Fixed: was 'cretaedAt'
        type: Date,
        default: Date.now, // Fixed: removed () so it runs on document creation
    },
});

module.exports = mongoose.model("Review", reviewSchema); // Fixed: was 'mongoose.module'