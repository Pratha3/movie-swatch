
const fs = require("fs");
const movieModel = require("../models/movie");

let isId = null;
const movie = async (req, res) => {
  try {
    const movies = await movieModel.find({})
    res.render("index", { movies });
  } catch (err) {
    console.log(err);
    return false;
  }
};

const addmoviepage = async (req, res) => {
  try {
    res.render("addmovie");
  } catch (err) {
    console.log(err);
    return false;
  }
};
const addmovie = async (req, res) => {
  const { moviename, movietype, ratings, moviedisc } = req.body;
  let image = req.file.path;

  try {
    let book = await movieModel.create({
    moviename, movietype, ratings, moviedisc,image,});
    res.redirect("/");
  } catch (err) {
    console.log(err);
    return false;
  }
};
const deletemovie = async (req, res) => {
  try {
    let movie = await movieModel.findOneAndDelete({ _id: req.query.id });
    if (movie.image) {
      fs.unlinkSync(movie.image);
    }
    res.redirect("/");
  } catch (err) {
    console.log(err);
    return false;
  }
};
const editmoviepage = async (req, res) => {
  try {
    const movie = await movieModel.findOne({ _id: req.query.id });
    isId = req.query.id;
    return res.render("editmovie", { movie });
  } catch (err) {
    console.log(err);
    return false;
  }
};
const editmovie = async (req, res) => {
  const { moviename, movietype, ratings, moviedisc } = req.body;
  try {
    const movie = await movieModel.findOne({ _id: isId });
    if (req.file) {
      fs.unlinkSync(movie.image);
      image = req.file.path;
    } else {
      image = movie.image;
    }

    await movieModel.findOneAndUpdate(
      { _id: isId },
      { moviename, movietype, ratings, moviedisc, image }
    );
  } catch (err) {
    console.log(err);
    return false;
  }
  isId = null;
  return res.redirect("/");
};
const movieInformation = async (req, res) => {
  const id = req.query.id;
  const movie = await movieModel.findOne({ _id: id });
  res.render("movieDetail", { movie });
};
module.exports = {movie,addmoviepage,addmovie,deletemovie,editmovie,editmoviepage,movieInformation,};
