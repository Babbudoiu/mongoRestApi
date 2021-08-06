const Movie = require("./movies.model");

exports.addMovie = async (req, res) => {
    try {
       const movie = new Movie(req.body);
       const addedMovie = await movie.save(); 
       res
       .status(200)
       .send({movie: addedMovie, message: "Movie added succesfully"})
    } catch (error) {
        res.status(500).send(error)
    }
};

exports.findMovie = async (req, res) => {
    try {
        const movie = req.params.title;
        const targetMovie = await Movie.findOne({title: movie});
        console.log(targetMovie);
        res.status(200).send({ movie: targetMovie, message: "Movie found" })
    } catch (error) {
        res.status(500).send(error)
    }
}; 

exports.findAllMovies = async (req, res) => {
    try {
        const list = await Movie.find({});
        res.status(200).send(list);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.deleteMovie = async (req,res) => {
    try {
        const movie = req.params.title;
        const removeMovie = await Movie.findOneAndDelete({title: movie});
        res.status(200).send({ movie: removeMovie, message: "Movie deleted"})
    } catch (error) {
        res.status(500).send(error)
    }
};

exports.updateMovie = async (req, res) => {
    try {
       const movie = req.body.title;
       const watched = req.body.watched;
       const rating = req.body.rating;
       const inWatchlist = req.body.inWatchlist
       const modifyMovie = await Movie.updateOne({title: movie, watched: watched, rating: rating, inWatchlist: inWatchlist});
       res.status(200).send({ movie: modifyMovie, message: "Movie modified"}) 
    } catch (error) {
        res.status(500).send(error) 
    }
};
