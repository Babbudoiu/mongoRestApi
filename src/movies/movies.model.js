const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    }, 
    actor:{
        type: String,
    },
    category: {
        type: String,
        required: true,
    },
    watched: {
        type: Boolean,
        required: true,
        default: false,
    },
    rating: {
        type: Number,
        required: true,
        default: 0,
    },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;