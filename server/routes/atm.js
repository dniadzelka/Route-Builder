//https://www.npmjs.com/package/lowdb

const low = require('lowdb');
const db = low('./server/db/db.json');
const express = require('express');
const router = express.Router();

router.get('/atm_locations', function(req, res, next) {
	const data = db.get('atms').value();
	console.log('/atm_locations,  data: ' + JSON.stringify(data));
	res.json(data);
});

router.post('/add_atm', function(req, res, next) {
	const params = req.body;
	const atm = {
		id: new Date().getTime().toString(),
		name: params.name,
		address: params.address,
		lat: params.lat,
		lng: params.lng
	};

	db.get('atms').push(atm).write();
	const data = db.get('atms').value();
	console.log('/atm_locations,  data: ' + JSON.stringify(data));
	res.json(data);
});

module.exports = router;