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
	var animationTimers = {};

	$(document).foundation();

	// get('http://localhost:3001/api/portfolio')
	// 	.then(response=>{console.log(response)})
	// 	.catch(err=>{console.error(err)})

	$(".circle-wrapper").mouseover(function (e) {
		$(this).addClass("circle-animated");
		animationTimers[this.id] = {
			time: Date.now(),
			timeout: null
		};
	});
	$(".circle-wrapper").mouseout(function (e) {
		var animationTime = 2000;
		var that = this;
		var timeRemaining = animationTime - (Date.now() - animationTimers[this.id].time) % animationTime;
		console.log(timeRemaining);
		clearTimeout(animationTimers[this.id].timeout);
		animationTimers[this.id].timeout = setTimeout(function () {
			$(that).removeClass('circle-animated');
		}, timeRemaining);
	});
})();