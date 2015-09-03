var fs = require('fs');
var path = require('path');

var dir = path.join(__dirname, 'temp');
var target = path.join(dir, 'target');
var source = __filename;

fs.mkdir(dir, handlingError(function(){
	fs.readFile(source, handlingError(function(content){
		fs.writeFile(target, content, handlingError(function(err){
			console.log("all done");
		}));
	}));
}));

function handlingError(cb){

	return function(err, result){
		if(err) handleError(err);
		else cb(result);
	}

};

function handleError(err){
	if(err) console.log(err);
}