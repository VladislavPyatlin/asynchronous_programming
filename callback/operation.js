module.exports = function(cb){

	var pending = 0;
	var results = [];
	var calledback = false;

	call1(handleResult());
	call2(handleResult());
	call3(handleResult());


	function handleResult(){

		var order = pending;
		pending ++;

		return function(err, result){
			pending--;
			if(err) callback(err);
			else{
				results[order] = result;
				if(! pending) callback(null, results);
			}
		}

	}

	function callback(err, value){
		if(! calledback){
			calledback = true;
			cb(err, value);
		}	
	}

};

function call1(cb){
	setTimeout(cb, randomTimeout(), null, randomValue());
}

function call2(cb){
	setTimeout(cb, randomTimeout(), null, randomValue());
}

function call3(cb){
	setTimeout(cb, randomTimeout(), null, randomValue());
}
 
function randomTimeout(){
	return Math.floor(Math.random() * 1e3);
}

function randomValue(){
	return Math.floor(Math.random() * 1e4);
}