const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var fs = require('fs');
var http = require('http');

var routes = require('./routes');

var app = express();

app.use(cors());
app.set('port', process.env.PORT || 3001);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
routes(app);

http.createServer(app)
.on('error',function(err) {
  console.log("[Error] ", err);
  process.exit(1);
})
.listen(app.get('port'), function(){
      console.log("Service listening on port " + app.get('port'));
});
