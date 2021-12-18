//Buenas practicas...
//Se da por implicito el verdadero para la condicion.
const autenticado = true;
if(autenticado){ 
    console.log('Estas autenticado.')
}

//Para evaluar muchas condiciones siempre se arranca con el maximo valor.
const puntaje = 400;
if(puntaje > 350){
    console.log('Excelente');
}else if(puntaje > 300){
    console.log('Bien, hiciste 300')
}

//Dentro de una funcion se utiliza el return para cortar la ejecución.
function revisarPuntaje() {
    if(puntaje > 350){
        console.log('Excelente');
        return;
    }

    if(puntaje > 300){
        console.log('Bien, hiciste 300')
        return;
    }
}
revisarPuntaje();

//Operador ternario
//Si acceder y puedePagar, son verdaderos: Si, está autenticado y puede pagar.
//Si acceder es verdadero y puedePagar no: Si autenticado, no puede pagar.
//acceder y puedePagar son falsos: No, no está autenticado. 
let acceder = true,
    puedePagar = true;
console.log( acceder ? puedePagar ? 'Si, está autenticado y puede pagar' : 'Si autenticado, no puede pagar' : 'No, no está autenticado');

