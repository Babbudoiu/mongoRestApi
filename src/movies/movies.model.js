const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    img: {
        type: String,
    },
    trailer: {
        type: String,
    },
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
    inWatchlist: {
        type: Boolean,
        required: true,
        default: false,
    },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;