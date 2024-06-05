const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  moviename: {
    type: String,
    required: true,
  },
  moviedisc: {
    type: String,
    required: true,
  },
  ratings: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const movieModel = mongoose.model("movies", MovieSchema);
module.exports = movieModel;
