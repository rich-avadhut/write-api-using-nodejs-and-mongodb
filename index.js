var express = require('express'),
    bodyParser = require('body-parser');

var app = express();
var cors = require('cors');
app.use(cors());
app.use(bodyParser.json());

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var ObjectId = require('mongodb').ObjectID;

app.get('/posts', function (req, res) {

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("test");
        dbo.collection("posts").find({}).toArray(function (err, result) {
            if (err) throw err;
            console.log(result.length + " objects found");
            res.end(JSON.stringify(result));
            db.close();
        });
    });
});

app.put('/posts', function (req, res) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("test");
        var myquery = { "_id": ObjectId(req.body._id) };
        dbo.collection("posts").updateOne(myquery, { $set: { "title": req.body.title } }, function (err, result) {
            if (err) throw err;
            console.log("1 document updated");
            res.end(JSON.stringify(result));
            db.close();
        });
    });
});

app.post('/posts', function (req, res) {

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("test");

        dbo.collection("posts").insertOne(req.body, function (err, result) {
            if (err) throw err;
            console.log(result);
            res.end(JSON.stringify(result));
            db.close();
        });
    });
});

app.delete('/posts/:objectId', function (req, res) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("test");
        var myquery = { "_id": ObjectId(req.params.objectId) };
        dbo.collection("posts").remove(myquery, function (err, obj) {
            if (err) throw err;
            console.log("1 document deleted");
            res.end(JSON.stringify(obj));
            db.close();
        });
    });
})

var server = app.listen(8080, function () {
    console.log("listening..");
})