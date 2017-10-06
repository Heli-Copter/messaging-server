const express = require('express');
var db = require('./db');
var bodyParser = require('body-parser');
var cors = require('cors');


var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
    res.sendStatus(200);
});
app.post('/signup', function (req, res) {
    //db.connect();
    var response = db.query("INSERT INTO user (first_name, last_name, mobile, password, is_active, is_enabled) VALUES ('" + req.body.firstName + "', '" + req.body.lastName + "', " + req.body.mobile + ", '" + req.body.password + "', 1, 1);");
    //db.end();
    response === 'success' && res.sendStatus(200);
    response === 'failure' && res.sendStatus(400);
});

app.listen(3001, function () {
    console.log('Running express server at localhost:3001');
});
