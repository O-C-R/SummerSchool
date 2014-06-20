var express = require('express');
var rita = require('rita');

var app = express();

app.get('/', function(req,res) {

	res.send('YES WE ARE AWESOME!');
	
} );

app.get('/boo/:country', function(req,res) {

	res.send('BooooooOooooooo! ' + req.params.country);
	
} );

app.get('/pos/:sentence', function(req,res) {

	res.send('Parts of speech: ' + rita.RiTa.getPosTags(req.params.sentence));
	
} );



var server = app.listen(3000, function() {
	console.log('Server running on port ', server.address().port);
});