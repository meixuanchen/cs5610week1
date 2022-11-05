const {MongoClient} = require('mongodb');

require('dotenv').config();
const uri = process.env.mongodb;
const client = new MongoClient(uri);

module.exports = {
	connectionToDB:
	async function(){
		try{
			await client.connect()
			console.log("connecting")
		}
		catch(err){
			console.log("connection error", err)
		}
		
	},
	readAll: async function(){
		const cursor = await client.db("CS5610").collection("wishlists").find();
		const data = await cursor.toArray();
		const result = await client.db("CS5610").collection("wishlists").insertOne(newitem);
		return data;
	}
}
