const express = require('express');
const routes = require('./routes/atm');
const app = express();

app.use('/', routes);

app.listen(8081, function () {
	console.log('Server started on port 8081')
});