   //File: controllers/infoLogin.js
   var mongoose = require('mongoose');
   var infoLogin  = mongoose.model('infoLogin'); 
   
   //GET - Return all infoLogin in the DB
   exports.findAllinfoLogin = function(req, res) {
    infoLogin.find(function(err, infoLogin) {
       if(err) res.send(500, err.message);
   
       console.log('GET /infologin')
           res.status(200).jsonp(infologin);
       });
   };
   
   //GET - Return a infoLogin with specified ID
   exports.findById = function(req, res) {
    infoLogin.findById(req.params.id, function(err, infologin) {
       if(err) return res.send(500. err.message);
   
       console.log('GET /infologin/' + req.params.id);
           res.status(200).jsonp(infologin);
       });
   };
   
   //POST - Insert a new infoLogin in the DB
   exports.addinfoLogin = function(req, res) {
       console.log('POST');
       console.log(req.body);
   
       var infoLogin = new infoLogin({
           id:    req.body.id,
           password: 	  req.body.password,
           email:  req.body.email,
           type:   req.body.type,
       });
   
       infoLogin.save(function(err, infologin) {
           if(err) return res.status(500).send( err.message);
       res.status(200).jsonp(infologin);
       });
   };
   
   //PUT - Update a register already exists
   exports.updateinfoLogin = function(req, res) {
    infoLogin.findById(req.params.id, function(err, infologin) {
           infologin.id   = req.body.petId;
           infologin.password    = req.body.passwrod;
           infologin.email = req.body.email;
           infologin.type  = req.body.type;
           
           infologin.save(function(err) {
               if(err) return res.status(500).send(err.message);
         res.status(200).jsonp(infologin);
           });
       });
   };
   
   //DELETE - Delete a infoLogin with specified ID
   exports.deleteinfoLogin = function(req, res) {
    infoLogin.findById(req.params.id, function(err, infologin) {
        infologin.remove(function(err) {
               if(err) return res.status(500).send(err.message);
         res.status(200).send();
           })
       });
   };