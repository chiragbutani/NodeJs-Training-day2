module.exports = function(app) {
	
	app.get('/api/person/:id', function(req, res) {
	// get that data from database
		res.json({ firstname: 'Chirag', lastname: 'Butani' });
	});
	
	app.post('/api/person', function(req, res) {
		console.log('Hello '+ req.firstname);
	});
	
	app.delete('/api/person/:id', function(req, res) {
		// delete from the database
	});
	
}