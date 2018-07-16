//File: controllers/reporte.js
var mongoose = require('mongoose');
var Reporte  = mongoose.model('Reporte'); 

//GET - Return all Reporte in the DB
exports.findAllReporte = function(req, res) {
    Reporte.find(function(err, Reporte) {
    if(err) res.send(500, err.message);

    console.log('GET /reporte')
        res.status(200).jsonp(reporte);
    });
};

//GET - Return a Reporte with specified ID
exports.findById = function(req, res) {
    Reporte.findById(req.params.id, function(err, reporte) {
    if(err) return res.send(500. err.message);

    console.log('GET /reporte/' + req.params.id);
        res.status(200).jsonp(reporte);
    });
};

//POST - Insert a new infoLogin in the DB
exports.addReporte = function(req, res) {
    console.log('POST');
    console.log(req.body);

    var Reporte = new Reporte({
        tarifaBase: 		    req.body.tarifaBase,
	    tarifaIntermedia: 		req.body.tarifaIntermedia,
	    tarifaPunta:        	req.body.tarifaPunta,
        demandaFacturable:   	req.body.demandaFacturable,  
        total:                  req.body.total,
        totalIVA:               req.body.totalIVA,
    });

    Reporte.save(function(err, reporte) {
        if(err) return res.status(500).send( err.message);
    res.status(200).jsonp(reporte);
    });
};

//PUT - Update a register already exists
exports.updateReporte = function(req, res) {
    Reporte.findById(req.params.id, function(err, Reporte) {
        Reporte.tarifaBase   = req.body.tarifaBase;
        Reporte.tarifaIntermedia    = req.body.tarifaIntermedia;
        Reporte.tarifaPunta = req.body.tarifaPunta;
        Reporte.demandaFacturable  = req.body.demandaFacturable;
        Reporte.total  = req.body.total;
        Reporte.totalIVA  = req.body.totalIVA;
        
        reporte.save(function(err) {
            if(err) return res.status(500).send(err.message);
      res.status(200).jsonp(reporte);
        });
    });
};

//DELETE - Delete a Reporte with specified ID
exports.deleteReporte = function(req, res) {
    Reporte.findById(req.params.id, function(err, reporte) {
        reporte.remove(function(err) {
            if(err) return res.status(500).send(err.message);
      res.status(200).send();
        })
    });
};