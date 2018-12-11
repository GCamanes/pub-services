const jsonPubs = require('../mocks/pubs.json')
const dayConvertor = require('../mocks/dayConvertor.json')[0]
const moment = require('moment')

function getAllPubs () {
	console.log("** List of all Pubs **")
	for (var i=0; i < jsonPubs.length; i++) {
		console.log(jsonPubs[i]["name"])
	}
	console.log("")
}
function getAllOpenPubsToday () {
	var day = dayConvertor[moment().day()]
	var openPubs = []
	console.log("** List of all Pubs open each " + day + " **")
	for (var i=0; i < jsonPubs.length; i++) {
		if (jsonPubs[i]["openDays"].includes(day)) {
			console.log(jsonPubs[i]["name"]);
		}
	}
}

module.exports = {
	getAllPubs: getAllPubs,
	getAllOpenPubsToday: getAllOpenPubsToday,
};