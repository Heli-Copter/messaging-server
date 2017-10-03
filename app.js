const  express = require('express');

let app = express();

app.get('/', function (req, res) {
    res.sendStatus(200);
});

app.listen(3000, function() {
    console.log('Running express server at localhost:3000');
});