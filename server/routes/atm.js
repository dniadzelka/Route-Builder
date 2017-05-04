//https://www.npmjs.com/package/lowdb

const low = require('lowdb');
const db = low('./server/db/db.json');
const express = require('express');
const router = express.Router();

router.get('/atms', function(req, res, next) {
	const data = db.get('atms').value();
	console.log('/atms,  data: ' + JSON.stringify(data));
	res.json(data);
});

router.get('/minsk_areas', function(req, res, next) {
	const data = db.get('areas').value();
	console.log('/minsk_areas,  data: ' + JSON.stringify(data));
	res.json(data);
});

router.post('/add_atm', function(req, res, next) {
	const params = req.body;
	const atm = {
		id: new Date().getTime().toString(),
		name: params.name,
		address: params.address,
		lat: params.lat,
		lng: params.lng,
		area: params.area
	};

	db.get('atms').push(atm).write();
	const data = db.get('atms').value();
	console.log('/add_atm,  data: ' + JSON.stringify(data));
	res.json(data);
});

router.post('/delete_atm', function(req, res, next) {
	const params = req.body;

	db.get('atms')
		.remove(params)
		.write();

	const data = db.get('atms').value();
	console.log('/delete_atm,  data: ' + JSON.stringify(data));
	res.json(data);
});

module.exports = router;