const express = require('express');
const router = require('./routes/wishlists');
const path = require('path');
const db = require('./db');
// const { connectionToDB } = require('./db.js');
db.connectionToDB();

const {connectionToDB} = require('./db');
connectionToDB();

const dotenv = require('dotenv');
const { addToDB } = require('./db');
dotenv.config();



const app = express();

app.use(express.json());
app.use(express.urlencoded());

const port = 3000;
app.set("views", "views");
app.set("view engine", "pug");
app.use(express.static("public"));
app.use("/api/newitem", router);


app.get("/", function(req,res){
	res.sendFile(path.join(__dirname,'./public','about.html'));
	
});

app.listen(port,()=>{
	console.log(`listening on port ${port}`);
	connectionToDB();
});

