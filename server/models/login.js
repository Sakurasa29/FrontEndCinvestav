var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var infoLogin = new Schema({
	password: 		{ type: String },
	email: 		{ type: String },
	type:   	{ type: String }, 
	id:   	{ type: String },  
});


module.exports = mongoose.model('Login', infoLogin);