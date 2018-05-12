'use strict';

function get(url, params) {
	var xhttp = new XMLHttpRequest();

	var queryString = '';
	if (params) {
		queryString = Object.keys(params).reduce(function (acc, key, index) {
			return acc + (index ? '&' : '') + key + '=' + params[key];
		}, '?');
	}

	xhttp.open("GET", url + queryString, true);
	xhttp.send();

	return new Promise(function (resolve, reject) {
		xhttp.onreadystatechange = function () {
			if (this.readyState === 4 && 200 <= this.status && this.status < 400) {
				resolve(JSON.parse(this.responseText));
			} else if (this.readyState === 4) {
				reject(JSON.parse(this.responseText));
			}
		};
	});
}

(function () {
	get('http://localhost:3001/api/portfolio').then(function (response) {
		console.log(response);
	}).catch(function (err) {
		console.error(err);
	});
})();