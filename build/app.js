"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/', function (req, res) {
    res.send('Hello World !');
});
app.get('/apiPath/key1', function (req, res) {
    let data = JSON.parse(fs.readFileSync('./src/db/db.json', 'utf8'));
    res.send(data);
});
app.get('/apiPath/key1/hashKey1', function (req, res) {
    let data = JSON.parse(fs.readFileSync('./src/db/db.json', 'utf8'));
    data = data.key1.hashKey1;
    console.log("data", data);
    res.send(data);
});
app.post('/apiPath/key1/hashKey1', function (req, res) {
    let newData = JSON.parse(fs.readFileSync('./src/db/db.json', 'utf8'));
    newData.key1.hashKey1 = req.body;
    console.log("Current Data ==>", newData);
    fs.writeFileSync('./src/db/db.json', JSON.stringify(newData));
    let data = JSON.parse(fs.readFileSync('./src/db/db.json', 'utf8'));
    res.send(data);
});
app.listen(3000, function () {
    console.log('Server on port 3000');
});
