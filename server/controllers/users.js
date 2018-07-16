   //File: controllers/Users.js
   var mongoose = require('mongoose');
   var Users  = mongoose.model('Users');
   
   //GET - Return all Users in the DB
   exports.findAllUsers = function(req, res) {
       Users.find(function(err, Users) {
       if(err) res.send(500, err.message);
   
       console.log('GET /users')
           res.status(200).jsonp(users);
       });
   };
   
   //GET - Return a Users   with specified ID
   exports.findById = function(req, res) {
       Users.findById(req.params.id, function(err, users) {
       if(err) return res.send(500. err.message);
   
       console.log('GET /users/' + req.params.id);
           res.status(200).jsonp(users);
       });
   };
   
   //POST - Insert a new Users in the DB
   exports.addUsers = function(req, res) {
       console.log('POST');
       console.log(req.body);
   
       var users = new Users({
           id:    req.body.id,
           name: 	  req.body.name,
           email:  req.body.email,
           type:   req.body.perday,
       });
   
       users.save(function(err, users) {
           if(err) return res.status(500).send( err.message);
       res.status(200).jsonp(users);
       });
   };
   
   //PUT - Update a register already exists
   exports.updateUsers = function(req, res) {
       Users.findById(req.params.id, function(err, users) {
           users.id   = req.body.petId;
           users.name    = req.body.name;
           users.email = req.body.email;
           users.perday  = req.body.type;
           
           users.save(function(err) {
               if(err) return res.status(500).send(err.message);
         res.status(200).jsonp(users);
           });
       });
   };
   
   //DELETE - Delete a Users with specified ID
   exports.deleteUsers = function(req, res) {
       Users.findById(req.params.id, function(err, users) {
           users.remove(function(err) {
               if(err) return res.status(500).send(err.message);
         res.status(200).send();
           })
       });
   };