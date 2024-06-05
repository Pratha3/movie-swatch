const mongoose = require('mongoose');

const db = async () => {
  await mongoose.connect('mongodb+srv://prathabagtharia:pratha03@cluster1119.uuqixbo.mongodb.net/movies');
  console.log("databas connected");
}

module.exports = db;
