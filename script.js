// número que aparece na tela
var numeroTela = 0;

// butões de aritmética
var minusVar = document.getElementById('minus');
var plusVar = document.getElementById('plus');
var divVar = document.getElementById('division');
var timesVar = document.getElementById('times');

// variáveis para checar qual operação o usuário que fazer
var isDoingPlus = false;
var isDoingMinus = false;
var isDoingDiv = false;
var isDoingTimes = false;

function doDivision(){
    if(divVar.className === 'btn-orange' && (isDoingMinus === false && isDoingPlus === false && isDoingTimes === false)){
        divVar.className = 'btn-orange-focus';
        isDoingDiv = true;
    } else{
        divVar.className = 'btn-orange';
        isDoingDiv = false;
    }
}

function doPlus(){
    if(plusVar.className === 'btn-orange' && (isDoingMinus === false && isDoingDiv === false && isDoingTimes === false)){
        plusVar.className = 'btn-orange-focus';
        isDoingPlus = true;
    } else{
        plusVar.className = 'btn-orange';
        isDoingPlus = false;
    }
}

function doMinus(){
    if(minusVar.className === 'btn-orange' && (isDoingDiv === false && isDoingPlus === false && isDoingTimes === false)){
        minusVar.className = 'btn-orange-focus';
        isDoingMinus = true;
    } else{
        minusVar.className = 'btn-orange';
        isDoingMinus = false;
    }
}

function doTimes(){
    if(timesVar.className === 'btn-orange' && (isDoingMinus === false && isDoingPlus === false && isDoingDiv === false)){
        timesVar.className = 'btn-orange-focus';
        isDoingTimes = true;
    } else{
        timesVar.className = 'btn-orange';
        isDoingTimes = false;
    }
}

function doEquals(){
    // função para o butão IGUAL
}

function calculation(n){

}