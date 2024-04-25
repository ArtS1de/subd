const md5 = require('md5')
const crypto = require('crypto')
 
exports.sessions = {
}

exports.login = async function(req, login, pass) {

	var cookies = req.cookies
	var secret = cookies['app_user']

	var user = await req.db.one('SELECT * FROM users WHERE login = $1', login)

	if (user && (user.pass == md5(pass))) {
		var secret = 'secret';
		var hash = crypto.createHmac('sha256', secret)
		                   .update(login)
		                   .digest('hex');

		var cookie = login + '--' + hash;
		exports.sessions[login] = {
			active:    1,
			timestamp: new Date().getTime(),
		}
		exports.sessions[login].user = user
		return cookie;
	}
	return 0;
}

exports.auth = function(req) {

	var cookies = req.cookies
	var secret = cookies['app_user']

	console.log(cookies)
	
	/*
	if (!secret) {
		return {}
	}*/

	if (!secret || typeof secret !== 'string') {
    	return {}
	}

	///////////////////////////

	var res = secret.split('--');

	if(!res.length) {
		return {}
	}
	var session = exports.sessions[res[0]]
	if (!session) {
		return {};
	}
	var current_timestamp = new Date().getTime()

	if (!session.active || ((current_timestamp - session.timestamp) > 43200*1000)) {
		return 0;
	}
	return session;
}

exports.logout = function(login) {
	exports.sessions[login] = {
	}
}
