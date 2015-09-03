var fs = require('fs');
var path = require('path');
var async = require('async');

var dir = path.join(__dirname, 'temp');
var source = __filename;
var target = path.join(dir, 'target.js');

var fileContent;

var parallelOps = [
	fs.mkdir.bind(fs, dir),
	fs.readFile.bind(fs, source)
];

var operations = [
	function(cb){
		async.parallel(parallelOps, cb);
	},
	function(cb){
		cb(null, results[1]);
	},
	fs.writeFile.bind(fs, target)
];

async.waterfall(operations, done);

function done(err){
	if(err)
		console.error(err);
	else
		console.log('all done');
}

function handleError(err){
	console.error(err);
}