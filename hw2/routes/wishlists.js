const express = require('express');
const router = express.Router();
// const axios = require('axios');
// const {addTODB, readAll} = require('../db');

const path = require('path');

router.get('/new', function (req, res) {
	console.log('d');
	res.sendFile(path.join(__dirname, '../public', 'newitem.html'));
	});


router.get("/", async function(req,res){
	await readAll();

})

router.get("/", function (req,res){
	res.send("listing ");
});

router.post("/", async function (req,res){
	try{
			await addTODB(req.body);
	res.redirect('/api/newitem')
	}
	catch(err){
		console.error(err)
	}
}
)


module.exports = router;