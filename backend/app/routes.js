var path = require('path');
module.exports = function(app) {






















	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.render(path.resolve('./../frontend/index.html')); // load our public/index.html file
	});
};