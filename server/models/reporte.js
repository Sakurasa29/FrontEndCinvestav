var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var Reporte = new Schema({
	tarifaBase: 		    { type: Number },
	tarifaIntermedia: 		{ type: Number },
	tarifaPunta:        	{ type: Number }, 
    demandaFacturable:   	{ type: Number },  
    total:                  { type: Number }, 
    totalIVA:                  { type: Number }, 
});


module.exports = mongoose.model('Reporte', reporte);