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
	addToDB: async function (item) {
        try {
            const result = await client.db("hw2").collection("wishlist").insertOne(item);
            console.log(result);
        }
        catch (err) {
            console.log("insert error", err)
        }
    },
	readAll: async function(){
		const cursor = await client.db("hw2").collection("wishlist").find();
		const data = await cursor.toArray();
		
		return data;
	},
    // readOne: async function (filter) {
    //      const result = await client.db("hw2").collection("wishlist").findOne(filter);

    //     return result;
    // }
}

