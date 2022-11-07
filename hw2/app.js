const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const path = require("path");
const itemRoutes = require("./routes/wishlists");
const methodOverride = require("method-override");
const mongoose = require("mongoose");

const uri =  process.env.mongodb;

console.log(uri);
try {
  mongoose.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true , dbName: 'hw2'},
    () => console.log(" Mongoose is connected")
  );
} catch (e) {
  console.log("could not connect");
}


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use("/items", itemRoutes);

app.use((err, req, res, next) => {
  res.status(404).render("404");
});

app.use((req, res) => {
  res.status(404).render("404");
});

app.listen((port = process.env.PORT || 80), () => {
  console.log("app is listening on port 3000");
});

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use((err, req, res, next) => {
	res.status(404).render("404");
  });

  app.use((req, res) => {
	res.status(404).render("404");
  });
  
