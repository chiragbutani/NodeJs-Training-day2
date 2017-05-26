var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://chiragbutani2323:chirag23@ds155411.mlab.com:55411/addressbook');

var Schema = mongoose.Schema;

var personSchema = new Schema({
	firstname: String,
	lastname: String,
	address: String
});

var Person = mongoose.model('Person', personSchema);

var chirag = Person({
  firstname: 'Chirag',
  lastname: 'Butani',
  address: 'Atlanta'
});

// save the user
chirag.save(function(err) {
  if (err) throw err;

  console.log('person saved!');
});

var Patel = Person({
  firstname: 'Chirag',
  lastname: 'Patel',
  address: 'California'
});

// save the user
Patel.save(function(err) {
  if (err) throw err;

  console.log('person saved!');
});

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	
	// get all the users
	Person.find({}, function(err, users) {
		if (err) throw err;
		
		// object of all the users
		console.log(users);
	});
	
	next();
});

htmlController(app);

apiController(app);

app.listen(port);