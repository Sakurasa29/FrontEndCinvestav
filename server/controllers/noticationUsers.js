    //File: controllers/notificationUsers.js
var mongoose = require('mongoose');
var notificationUsers  = mongoose.model('notificationUsers');

//GET - Return all notificationUsers in the DB
exports.findAllnotificationUsers = function(req, res) {
	notificationUsers.find(function(err, notificationUsers) {
    if(err) res.send(500, err.message);

    console.log('GET /notificationusers')
		res.status(200).jsonp(notificationusers);
	});
};

//GET - Return a notificationUsers   with specified ID
exports.findById = function(req, res) {
	TVShow.findById(req.params.id, function(err, notificationusers) {
    if(err) return res.send(500. err.message);

    console.log('GET /notificationusers/' + req.params.id);
		res.status(200).jsonp(notificationusers);
	});
};

//POST - Insert a new notificationUsers in the DB
exports.addnotificationUsers = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var notificationusers = new notificationUsers({
		id:    req.body.id,
		name: 	  req.body.name,
		email:  req.body.email,
		perday:   req.body.perday,
	});

	notificationusers.save(function(err, notificationusers) {
		if(err) return res.status(500).send( err.message);
    res.status(200).jsonp(notificationusers);
	});
};

//PUT - Update a register already exists
exports.updatenotificationUsers = function(req, res) {
	notificationUsers.findById(req.params.id, function(err, notificationusers) {
		notificationusers.id   = req.body.petId;
		notificationusers.name    = req.body.name;
		notificationusers.email = req.body.email;
		notificationusers.perday  = req.body.perday;
		
		notificationusers.save(function(err) {
			if(err) return res.status(500).send(err.message);
      res.status(200).jsonp(notificationusers);
		});
	});
};

//DELETE - Delete a notificationUsers with specified ID
exports.deletenotificationUsers = function(req, res) {
	notificationUsers.findById(req.params.id, function(err, notificationusers) {
		notificationusers.remove(function(err) {
			if(err) return res.status(500).send(err.message);
      res.status(200).send();
		})
	});
};