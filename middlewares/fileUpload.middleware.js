const multer = require("multer");

const fileUpload = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const imageUpload = multer({ storage: fileUpload }).single("image");

module.exports = { imageUpload };
