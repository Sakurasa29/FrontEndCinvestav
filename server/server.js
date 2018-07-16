// server.js

// first we import our dependencies…
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import { getSecret } from './secrets';
import Comment from './models/comment';

// and create our instances
const app = express();
const router = express.Router();

// set our port to either a predetermined port number if you have set it up, or 3001
const API_PORT = process.env.API_PORT || 3001;

// db config -- set your URI from mLab in secrets.js
mongoose.connect(getSecret('dbUri'));
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// now we shouldss();
const router = express.Router();

// set our port to either a predetermined port number if you have set it up, or 3001
const API_PORT = process.env.API_PORT || 3001;

// db config -- set your URI from mLab in secrets.js
mongoose.connect(getSecret('dbUri'));
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// now we should configure the API to use bodyParser and look for JSON data in the request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(methodOverride());

// now we can set the route path & initialize the API
router.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

// Use our router configuration when we call /api
app.use('/api', router);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));

var TVShowCtrl = require('./controllers/tvshows');

// API routes
// LOGIN
var infoLogin = express.Router();

infologin.route('/infoLogin')
  .get(infologinCtrl.findAllinfologin)
  .post(infologinCtrl.addinfologin);

  infologin.route('/infologin/:id')
  .get(infologinCtrl.findById)
  .put(infologinCtrl.updateinfologin)
  .delete(infologinCtrl.deleteinfologin);

app.use('/api', infologin);

// USERS
var users = express.Router();

users.route('/notificationusers')
  .get(UsersCtrl.findAllUsers)
  .post(UsersCtrl.addUsers);

  users.route('/users/:id')
  .get(UsersCtrl.findById)
  .put(UsersCtrl.updatenUsers)
  .delete(UsersCtrl.deleteUsers);

app.use('/api', users);

//NOTIFICATION USERS
var notificationusers = express.Router();

notificationusers.route('/notificationusers')
  .get(notificationUsersCtrl.findAllnotificationUsers)
  .post(notificationUsersCtrl.addnotificationUsers);

  notificationusers.route('/notificationusers/:id')
  .get(notificationUsersCtrl.findById)
  .put(notificationUsersCtrl.updatenotificationUsers)
  .delete(notificationUsersCtrl.deletenotificationUsers);

app.use('/api', notificationusers);

// PARAMETER RANGE
var parameterrange = express.Router();

parameterrange.route('/notificationusers')
  .get(parameterrangeCtrl.findAllparameterrange)
  .post(parameterrangeCtrl.addparameterrange);

  parameterrange.route('/parameterrange/:id')
  .get(parameterrangeCtrl.findById)
  .put(parameterrangeCtrl.updateparameterrange)
  .delete(parameterrangeUsersCtrl.deleteparameterrange);

app.use('/api', parameterrange);

// REPORTE
var reporte = express.Router();

reporte.route('/reporte')
  .get(reporteCtrl.findAllreporte)
  .post(reporteCtrl.addreporte);

  parameterrange.route('/reporte/:id')
  .get(reporteCtrl.findById)
  .put(reporteCtrl.updatereporte)
  .delete(reporteCtrl.deletereporte);

app.use('/api', reporte);

