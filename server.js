const express = require('express');
const app = express();
const path = require('path');
const MongoClient = require('mongodb').MongoClient;

const PORT = 5050;
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const MONGO_URL = "mongodb://admin:password@docker-mongo-1:27017";
const client = new MongoClient(MONGO_URL);

//GET all users
app.get("/users", async (req, res) => {
    await client.connect(URL);
    console.log('Connected successfully to server');

    const db = client.db('test_db');
    const data = await db.collection('users').find({}).toArray();

    client.close();
    res.send(data);
});

// insert new user
app.post('/adduser', async (req, res) => {
    const userObj = req.body;
    console.log(req.body);
    await client.connect(URL);
    console.log('Connected successfully to server');

    const db = client.db('test_db');
    const data = await db.collection('users').insertOne(userObj);
    console.log(data);
    console.log('data inserted in db');
    client.close();
    res.redirect("/");
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});