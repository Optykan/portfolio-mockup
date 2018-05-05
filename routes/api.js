var express = require('express');
var router = express.Router();
const Response = require('./Response')

/* GET API. */
router.get('/', function(req, res, next) {
	res.setHeader('Content-Type', 'application/json');
	let response = new Response(Response.STATUS_OK, 'Hello, world!', null);
	response.send(res);
	// res.send(JSON.stringify({ message: Response.STATUS_NOT_FOUND}));
});

module.exports = router;
