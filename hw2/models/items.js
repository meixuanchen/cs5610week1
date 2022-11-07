const { truncateSync } = require("fs");
const mongoose = require("mongoose");
const { normalize } = require("path");

const itemSchema = new mongoose.Schema({
	id: {
	type: String,
	required: false,
	},
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
