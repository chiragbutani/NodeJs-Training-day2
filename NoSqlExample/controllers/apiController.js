module.exports = function(app) {
	
	app.get('/api/person/:id', function(req, res) {
	// get that data from database
		res.json({ firstname: 'chirag', lastname: 'Butani' });
	});
	
	app.post('/api/person', function(req, res) {
		// save to the database
	});
	
	app.delete('/api/person/:id', function(req, res) {
		// delete from the database
	});
	
}