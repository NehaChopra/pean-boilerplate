var path = require('path');
var app = require('express')();
var users = require('../app/controllers/users');

module.exports = function(app) {


	app.post('/users', users.create);
	app.put('/users', users.update);
	app.delete('/users', users.delete);



















	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.render(path.resolve('./../frontend/index.html')); // load our public/index.html file
	});
};