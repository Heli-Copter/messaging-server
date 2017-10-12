const express = require('express');
var db = require('./db');
var bodyParser = require('body-parser');
var cors = require('cors');
var fs = require('fs');
var https = require('https');


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
    var response = db.query("INSERT INTO user (first_name, last_name, email, mobile, password, is_active, is_enabled) VALUES ('" + req.body.firstName + "', '" + req.body.lastName + "', '" + req.body.email + "', " + req.body.mobile + ", '" + req.body.password + "', 1, 1);");
    //db.end();

});

app.all('/_status', function (req, res) {
    res.sendStatus(200);
});

https.createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}, app).listen(3001);
