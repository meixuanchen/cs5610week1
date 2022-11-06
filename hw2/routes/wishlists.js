const express = require('express');
const router = express.Router();
const {addToDB, readAll} = require('../db');
const path = require('path');

router.get('/new', function (req, res) {
	console.log('d');
	res.sendFile(path.join(__dirname, '../public', 'newitem.html'));
	});


router.get("/", async function(req,res){
	try{const data = await readAll();
	res.json(data);
	}catch(err){
		console.log(err);
	}
})

router.get("/:", async function (req, res) {
	try {
	  const data = await readOne({ _id: ObjectId(req.params.taskId) });
	  res.render("newitem",
		{ name: data.name, price: data.price })
	} catch (err) {
	  console.log(err.message);
	}
 });

 router.get("/newitem",function (req,res){
  res.sendFile(path.join(__dirname,"../public", "newitem.html"));

})

router.post("/", async function (req,res){
	try{
		console.log(req.body);
		await addToDB(req.body);
		res.redirect('/api/newitem')
	}
	catch(err){
		console.error(err)
	}
}
)


module.exports = router;