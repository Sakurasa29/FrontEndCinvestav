var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var notificationUsers = new Schema({
	id: 		{ type: Number },
	name: 		{ type: String },
	email: 	    { type: String },
	perday:  	{ type: Boolean },
});


module.exports = mongoose.model('notiUsers', notificationUsers);