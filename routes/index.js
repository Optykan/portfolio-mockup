var express = require('express');
var router = express.Router();
const fetch = require('node-fetch')

/* GET home page. */
router.get('/', function(req, res, next) {
	fetch(req.protocol+'://'+req.get('host')+'/api/portfolio/')
		.then(result=>result.json())
		.then(portfolio=>{
			res.render('index', { 
				title: 'Express', 
				portfolio: portfolio.response
			});
		}).catch(err=>{
			console.error(err)
		})
});

module.exports = router;
