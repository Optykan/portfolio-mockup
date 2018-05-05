'use strict';

const STATUS_OK = 200;
const STATUS_NOT_FOUND = 404;
const STATUS_BAD_REQUEST = 400;

class Response{
	constructor(status, message, body){
		
		this.status  = status;
		this.message = message;
		this.body    = body;
	}
	send(res){
		res.setHeader('Content-Type', 'application/json');
		res.status(this.status).json({
			status: this.status,
			message: this.message,
			response: this.body
		});
	}
	static get STATUS_OK(){
		return STATUS_OK;
	}
	static get STATUS_NOT_FOUND(){
		return STATUS_NOT_FOUND;
	}
	static get STATUS_BAD_REQUEST(){
		return STATUS_BAD_REQUEST;
	}

}

module.exports = Response;