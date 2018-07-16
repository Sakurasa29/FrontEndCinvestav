   //File: controllers/parameterRange.js
   var mongoose = require('mongoose');
   var parameterRange  = mongoose.model('parameterRange');
   
   //GET - Return all parameterRange in the DB
   exports.findAllparameterRange = function(req, res) {
       parameterRange.find(function(err, parameterRange) {
       if(err) res.send(500, err.message);
   
       console.log('GET /parameterrange')
           res.status(200).jsonp(parameterrange);
       });
   };
   
   //GET - Return a parameterRange with specified ID
   exports.findById = function(req, res) {
       parameterRange.findById(req.params.id, function(err, parameterrange) {
       if(err) return res.send(500. err.message);
   
       console.log('GET /parameterrange/' + req.params.id);
           res.status(200).jsonp(parameterrange);
       });
   };
   
   //POST - Insert a new parameterRange in the DB
   exports.addparameterRange = function(req, res) {
       console.log('POST');
       console.log(req.body);
   
       var parameterrange = new Users({
           text:    req.body.text,
           notification: 	  req.body.notification,
           startRange:  req.body.startRange,
           endRange:   req.body.endRange,
           values:     req.body.values,
       });
   
       parameterrange.save(function(err, parameterrange) {
           if(err) return res.status(500).send( err.message);
       res.status(200).jsonp(parameterrange);
       });
   };
   
   //PUT - Update a register already exists
   exports.updateparameterRanges = function(req, res) {
       parameterRange.findById(req.params.id, function(err, parameterrange) {
           parameterrange.text   = req.body.text;
           parameterrange.notification    = req.body.notification;
           parameterrange.startRange = req.body.startRange;
           parameterrange.endRange  = req.body.endRange;
           parameterrange.values  = req.body.values;
           
           parameterrange.save(function(err) {
               if(err) return res.status(500).send(err.message);
         res.status(200).jsonp(parameterrange);
           });
       });
   };
   
   //DELETE - Delete a parameterRange with specified ID
   exports.deleteparameterRange = function(req, res) {
       parameterRange.findById(req.params.id, function(err, parameterrange) {
           parameterRange.remove(function(err) {
               if(err) return res.status(500).send(err.message);
         res.status(200).send();
           })
       });
   };