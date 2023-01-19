//Connect to MongoDB 

// Import our library (just the tools we need)
import {MongoClient} from "mongodb";

// Import the credentials to connect
import { uri } from "./secrets.js";

// Connect to the mongo server
const client = new MongoClient(uri);

// Create a reference to our database
const db = client.db("mongo0");

// Let's add a document to our collection


// Let's create a piece of furniture

// Let's add a document to our collection
const chair = {
    name: "Ergo Chair",
    brand: "Autonomous",
    color: "Gray",
    price: 369.00,
    warranty: "2 years"
}
async function addOneItem (item) {
    await db.collection("items").insertOne(item)
   console.log("item was added ")
}

addOneItem(chair);