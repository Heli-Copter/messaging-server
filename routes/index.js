'use strict';

var error = require('./error');
var respond = require('./respond');
var db = require('../db_model');

module.exports = function(app) {
	app.all('/_status', function(req, res, next) {
	  res.sendStatus(200);
	});

	app.post('/signup', function (req, res, next) {
		var dbQuery = "INSERT INTO user (first_name, last_name, email, mobile, password, is_active, is_enabled) VALUES ('" + req.body.firstName + "', '" + req.body.lastName + "', '" + req.body.email + "', " + req.body.mobile + ", '" + req.body.password + "', 1, 1);"
	    db.query(dbQuery, function(e,r) {
		if(e){ return next(e)}
		res.sendStatus(200);
		next();
	}, 
	// respond, 
	error);
	});

};