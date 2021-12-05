//Declaración de funcion (Function declaration)
sumar();
function sumar(){
    console.log(2 + 2);
}

//Expresion de funcion (Function expression)
sumar2(); //No funciona. Primero se debe declarar antes de llamar.
const sumar2 = function(){
    console.log(3 + 3);
}

/* La diferencia entre funcion declarativa y funcion de expresion además de su sintaxis reside en la forma en que llamamos a la funcion. En el ejemplo de arriba estamos llamando y posteriormente declarando, hay una que si funciona, la declarativa porque lo que hace javascript son 2 barridos, uno para lectura y el ultimo para ejecucion.*/