const express = require('express');
const router = require('./routes/tasks');
const db = require('./db');
// const { connectionToDB } = require('./db');
// db.connectionToDB();

const {connectionToDB, addTODB} = require('./db');
//addTODB({title:'test', date: 'now'});


const app = express();

app.use(express.json());
app.use(express.urlencoded());

const port = 3000;
app.set("views", "views");
app.set("view engine", "bug");
app.use(express.static("public"));
app.use("/api/tasks", router);


app.get("/", function(req,res){
	res.send("hellow");
});

app.listen(port,()=>{
	console.log(`listening on port ${port}`);
	connectionToDB();
});

