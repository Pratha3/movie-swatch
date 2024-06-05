const express = require("express");
const app = express();
const db = require("./config/database");
const { router } = require("./routers/movie.router");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));
app.use("/public", express.static("public"));

app.use(router);

app.listen(8888, (err) => {
  db();
  if (!err) console.log("Server is running on http://localhost:8888");
});
