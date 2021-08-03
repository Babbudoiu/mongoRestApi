const { Router } = require("express");
const movieRouter = Router();
const { addMovie, findMovie, findAllMovies, deleteMovie, updateMovie } = require("./movies.controllers");

movieRouter.post("/movies", addMovie);
movieRouter.get("/movies/:title", findMovie);
movieRouter.get("/moviesAll", findAllMovies);
movieRouter.delete("/movies/:title", deleteMovie);
movieRouter.put("/movies", updateMovie);

module.exports = movieRouter;