function get(url, params){
	var xhttp = new XMLHttpRequest();

	let queryString = '';
	if(params){
		queryString = Object.keys(params).reduce((acc, key, index)=>{
			return acc + (index ? '&' : '') +  key + '=' + params[key];
		}, '?');
	}

	xhttp.open("GET", url+queryString, true);
	xhttp.send();

	return new Promise((resolve, reject)=>{
		xhttp.onreadystatechange = function(){
			if(this.readyState === 4 && 200 <= this.status && this.status < 400){
				resolve(JSON.parse(this.responseText))
			} else if(this.readyState === 4) {
				reject(JSON.parse(this.responseText))
			}
		}  
	})
}

(function(){
	$(document).foundation();
	
	get('http://localhost:3001/api/portfolio')
		.then(response=>{console.log(response)})
		.catch(err=>{console.error(err)})
})()