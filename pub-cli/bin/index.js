#!/usr/bin/env node
var program = require('commander');

program
	.version('1.0.0')
	.option('-l, --list', 'Get the pubs list')
	.option('-o, --opened', 'Get the open pubs list')
	.parse(process.argv);

if (program.list) {
	console.log(require('../src/main').getAllPubs());
}

if (program.opened) {
	console.log(require('../src/main').getAllOpenPubsToday());
}