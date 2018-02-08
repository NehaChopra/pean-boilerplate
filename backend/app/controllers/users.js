User = require('../models/user');

module.exports= {

	index(req, res) {

	},


	show(req, res) {

	},

	create(req, res) {
		User.create(req.body)
			.then(function (newUser) {
				res.status(200).json(newUser);
			})
			.catch(function (error){
				res.status(500).json(error);
			});
	},

	//Edit an existing author details using model.update()
	update(req, res) {
		User.update(req.body, {
			where: {
				id: req.params.id
			}
		})
			.then(function (updatedRecords) {
				res.status(200).json(updatedRecords);
			})
			.catch(function (error){
				res.status(500).json(error);
			});
	},

	//Delete an existing author by the unique ID using model.destroy()
	delete(req, res) {
		User.destroy({
			where: {
				id: req.params.id
			}
		})
			.then(function (deletedRecords) {
				res.status(200).json(deletedRecords);
			})
			.catch(function (error){
				res.status(500).json(error);
			});
	}
};