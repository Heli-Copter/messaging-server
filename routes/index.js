'use strict';

var error = require('./error');
var respond = require('./respond');
var user = require('./user');

module.exports = function(app) {
	app.all('/_status', function(req, res, next) {
	  res.sendStatus(200);
	});

	app.post('/signup', user.userSignUp, respond, error);

	app.post('/login', user.userLogin, respond, error);
	
	app.post('/forgotPassword', user.forgotPassword, respond, error);

};
