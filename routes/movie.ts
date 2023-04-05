import express from "express";
import mongoose from "mongoose"
import movieSch from "../model/movie-model";

const movieRouter = express.Router()

movieRouter.get("/movies", async (req, res) => {
  console.log("movies get request")
  const getMovies = await movieSch.findOne({})
  if(getMovies) {
    res.status(200).send(getMovies)
  } else {
    res.send(400).send({message: "movieRouter has problem"})
  }
})

export default movieRouter;