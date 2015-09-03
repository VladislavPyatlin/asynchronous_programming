var operation = require('./operation');

operation(function(err, result){
	if(err) console.log(err);
	else console.log("succesful result ", result);
});