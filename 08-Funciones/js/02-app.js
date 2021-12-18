/*Siempre que se vea un nombre seguido de parentesís significa que es una funcion*/
numero = 1;
console.log(parseInt('20')); //Funcion.
console.log(numero.toString()); //Método.

/* La funcion y el metodo tienen una sintaxis distinta, pero su funcionalidad es similar */

function sumar(a, b){ //a y b son parametros.
    console.log(a + b);
}
sumar(5, 6); // 5 y 6 son argumentos.

//Parametros por defecto.
function saludar(nombre = 'desconocido', apellido = ''){
    console.log(`Hola ${nombre} ${apellido}`)
}
saludar()