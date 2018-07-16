var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var Users = new Schema({
	name: 		{ type: String },
	email: 		{ type: String },
	type:   	{ type: String },  
	id: 		{ type: String, unique: true},
});


module.exports = mongoose.model('infoUsers', users);