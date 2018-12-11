const jsonPubs = require('../mocks/pubs.json')
const dayConvertor = require('../mocks/dayConvertor.json')
const moment = require('moment')

function getAllPubs () {
	return jsonPubs;
}

function getAllOpenPubsToday () {
	var day = dayConvertor[moment().day()]
	return getAllPubs().filter(function (pub) {
		return pub.openDays.includes(day);
	})
}

module.exports = {
	getAllPubs: getAllPubs,
	getAllOpenPubsToday: getAllOpenPubsToday,
};