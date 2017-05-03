//https://www.npmjs.com/package/lowdb

const low = require('lowdb');
const db = low('./server/db/db.json');
const express = require('express');
const router = express.Router();

router.get('/atm_locations', function(req, res, next) {
	const data = db.get('atms');
	res.json(data);
});

module.exports = router;