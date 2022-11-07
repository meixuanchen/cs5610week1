const express = require('express');
const router = express.Router();
const path = require('path');
const Item = require(path.join(__dirname,'../models/items.js'));

router.get('/new', function (req, res) {
	res.render('items/new');
});

router.get("/", async (req, res) => {
	const items = await Item.find({});
	res.render("items/index",{items: items});
  });


router.get("/:id", async (req, res, next) => {
const { id } = req.params;
	try {
		const item = await Item.findById(id);
		res.render("items/detail", { item: item });
	} catch (e) {
		next(e);
	}
});

router.post(
"/",
async (req, res) => {
	const newItem = new Item(req.body);
	await newItem.save();
	res.redirect(`/items/${newItem._id}`);
}
);


router.get("/:id/edit", async (req, res, next) => {
try {
	const { id } = req.params;
	const item = await Item.findById(id);
	res.render("items/edit", { item: item });
} catch (e) {
	next(e);
}
});

router.put(
"/:id",
	async (req, res) => {
		const { id } = req.params;
		const item = await Item.findByIdAndUpdate(id, req.body, {
		runValidators: true,
		new: true,
		});
		res.redirect(`/items/${item._id}`);
	}
);

// D-Delete the product and its data
router.delete("/:id", async (req, res) => {
const { id } = req.params;
const deleted = await Item.findByIdAndDelete(id);
res.redirect("/items");
});


module.exports = router;