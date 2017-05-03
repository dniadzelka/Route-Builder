const express = require('express');
const routes = require('./routes/atm');
var bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
app.use('/', routes);

app.listen(8081, function () {
	console.log('Server started on port 8081')
});