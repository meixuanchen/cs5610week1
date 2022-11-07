const express = require('express');
// const router = require('./routes/wishlists');
const path = require('path');
// const db = require('./db');
const ejs = require('ejs');
const app = express();
const mongoose = require('mongoose');
// db.connectionToDB();

// const {connectionToDB, readAll, addToDB} = require('./db');
// connectionToDB();

const dotenv = require('dotenv');
// const db = require('./db');
const uri = process.env.mongodb;
mongoose.connect('mongodb+srv://com784512:cs5610@cluster5610.x4ibwxc.mongodb.net/hw2?retryWrites=true&w=majority');

dotenv.config();


app.use(express.json());
app.use(express.urlencoded());

const port = 3000;
// app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.static("public"));
// app.use("/api/newitem", router);


app.listen(port,()=>{
	console.log(`listening on port ${port}`);
})

const itemSchema = {
	name: String,
	price: String
}
const wishlist = mongoose.model('wishlist', itemSchema);
console.log(wishlist.find({}));

app.get("/", function(req,res){
	wishlist.find({}, function(error, item){
		console.log(item);
		res.render('index',{
			wishlist: item
		})
	})
	
});

// app.listen(port,()=>{
// 	console.log(`listening on port ${port}`);
// 	connectionToDB();
// });

