function suma (a,b){
    return  a + b;

}
exports.suma = suma;
////////////////////////////////////
function resta (a,b){
    return a- b;

}
exports.resta = resta;

////////////////////////////////////
function multi (a,b){
    return a * b;
}

exports.multi = multi;

/////////////////////////////////////
let div =(a,b)=>{
    if (a == 0) {
        return "No se puede divivif por 0"
    }else{
        return a/b
    }

}
exports.div = div;

/////////////////////////////////////
const calculadora = {
    suma:suma,
    resta:resta,
    mult:mult,
    div:div
}

module.exports = calculadora;


module.exports=function div(a,b){
    if(b != 0){
        return a / b;
    }else {
        return "No se puede dividir por 0";
    }
}
/*
//O bien 
function div(a,b){
    if(b != 0){
        return a / b;
    }else {
        return "No se puede dividir por 0";
    }
}

module.exports = div;

//O bien
module.exports = function(a,b) {
    if(b != 0){
        return a / b;
    }else {
        return "No se puede dividir por 0";
    }
};
//O bien

module.exports = (a,b) => {
    if(b != 0){
        return a / b;
    }else {
        return "No se puede dividir por 0";
    }
};

//O bien 
module.exports = div => {
    return 70/7; //Ejemplo para algo concreto
};

*/