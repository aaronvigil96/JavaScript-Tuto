//Use stric evalúa de forma estricta el código y no permite malas practicas
"use strict";

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

const producto2 = {
    peso: '1kg',
    medida: '1metro'
}

//Un ejemplo de use strict.
//x = 20; //Si no se utiliza use strict javascript te crea la variable sin necesidad de poner var,let o const.
//Use strict marca error, no te permite tener malas practicas.

//Métodos para objetos.
Object.freeze(producto); //No permite hacer modificaciones (eliminar, crear, modificar).
console.log(Object.isFrozen(producto)); //Pregunta si el objeto está freezado.
Object.seal(producto); //Sirve para modificar las propiedades del objeto nada más.
console.log(Object.isSealed(producto));// Pregunta si el objeto está sellado.

//Formas de sumar/concatenar objetos
const productos = Object.assign(producto, producto2);
const productos2 = {...producto, ...producto2}; //Spread operator...

