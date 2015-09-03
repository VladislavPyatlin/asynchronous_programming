function SimpleCalculator(){

    this.sum = function () {
        var sum = 0;

        for(var i = 0; i< arguments.length; i++){
            sum += arguments[i];
        }

        return sum;
    }

    this.difference = function(){

        var dif = arguments[0];

        for(var i = 1; i< arguments.length; i++){
            dif-=arguments[i];
        }

        return dif;
    }

    this.division = function(){
        var div = arguments[0];

        for(var i = 1; i< arguments.length; i++){
            if(arguments[i] === 0 ){
              alert("ERROR! Please, enter correct number!");
            } else{
              div=div/arguments[i];
            }
        }

        return div;
    }
};

function ScientificCalculator(){

    this.logarithm = function(){
        var log = 0;

        for(var i = 0; i< arguments.length; i++){
            log = Math.log(arguments[i]);
        }

        return log;
    }

    this.module = function(){
        var mod = 0;

        for(var i = 0; i< arguments.length; i++){
            mod = Math.abs(arguments[i]);
        }

        return mod;
    }
}

function ProgrammerCalculator(){

    this.rendering = function(){
        var rend = 0;

        for(var i = 0; i< arguments.length; i++){
            rend = arguments[i].toString(16);
        }

        return rend;
    }
}

ScientificCalculator.prototype = new SimpleCalculator();
ProgrammerCalculator.prototype = new ScientificCalculator();

var simpleCalc = new SimpleCalculator();
var scientificCalc = new ScientificCalculator();
var programmerCalc = new ProgrammerCalculator();

var number1 = document.getElementsByName('groundInput')[0].value;
var number2 = document.getElementsByName('groundInput')[1].value;

var btnSum = document.getElementById('sum');
var btnDif = document.getElementById('dif');
var btnDiv = document.getElementById('div');
var btnMod = document.getElementById('mod');
var btnLog = document.getElementById('log');
var btnRend = document.getElementById('rend');

var rezSum = document.getElementById('groundRezSum');
var rezDif = document.getElementById('groundRezDif');
var rezDiv = document.getElementById('groundRezDiv');
var rezLog = document.getElementById('groundRezLog');
var rezMod = document.getElementById('groundRezMod');
var rezRend = document.getElementById('groundRezRend');


btnSum.onclick = function(){
    number1 = document.getElementsByName('groundInput')[0].value;
    number2 = document.getElementsByName('groundInput')[1].value;
    rezSum.value = programmerCalc.sum(parseInt(number1),parseInt(number2));
};

btnDif.onclick = function(){
    number1 = document.getElementsByName('groundInput')[0].value;
    number2 = document.getElementsByName('groundInput')[1].value;
    rezDif.value = programmerCalc.difference(parseInt(number1),parseInt(number2));
};

btnDiv.onclick = function(){
    number1 = document.getElementsByName('groundInput')[0].value;
    number2 = document.getElementsByName('groundInput')[1].value;
    rezDiv.value = programmerCalc.division(parseInt(number1),parseInt(number2));
};

btnMod.onclick = function(){
    number1 = document.getElementsByName('groundInput')[0].value;
    rezMod.value = programmerCalc.module(parseInt(number1));
};

btnLog.onclick = function(){
    number1 = document.getElementsByName('groundInput')[0].value;
    if(number1< 0){ number1 = Math.abs(number1)}
    rezLog.value = programmerCalc.logarithm(parseInt(number1));
};

btnRend.onclick = function(){
    number1 = document.getElementsByName('groundInput')[0].value;
    rezRend.value = programmerCalc.rendering(parseInt(number1));
};
