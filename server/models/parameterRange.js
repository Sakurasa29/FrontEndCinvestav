var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var parametersRange = new Schema({
	text: 		{ type: String },
	notification: 		{ type: Boolean },
	startRange: 	    { type: Number },
    endRange:  	{ type: Number },
    values:     { type: Array },
});


module.exports = mongoose.model('paramRange', parametersRange);