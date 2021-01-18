const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')
// const MongoClient = require('mongodb').MongoClient;
const mongoose = require("mongoose");
const authRoutes = require('./routes/auth')
const PORT = 8800;

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const uri = "mongodb+srv://user:user@auth.rvsnq.mongodb.net/auth?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connect(uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, err => {
        if (err) return console.error(err, "Ошибка");
        // const collection = client.db("test").collection("devices");
        // collection.insertOne({ name: 'first task' });
        // client.close();
        console.log('connected to db')
    });

app.get("/", (req, res) => {
    res.json({ message: "Это стартовая страница нашего приложения" });
});

// route middlewares
app.use("/api/user", authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} port`);
});
