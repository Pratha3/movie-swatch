const { Router } = require("express");
const router = Router();
const { movie, addmoviepage, addmovie, deletemovie, editmovie, editmoviepage, movieInformation,} = require("../controllers/movie.controller");
const { imageUpload } = require("../middlewares/fileUpload.middleware");

router.get("/", movie);
router.get("/addmovie", addmoviepage);
router.post("/addmovie", imageUpload, addmovie);
router.get("/deleteData", deletemovie);
router.get("/editData", editmoviepage);
router.post("/editmovie", imageUpload, editmovie);
router.get("/information", movieInformation);

module.exports = { router };
