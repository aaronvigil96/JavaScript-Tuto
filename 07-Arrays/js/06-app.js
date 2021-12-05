// Destructuring de arrays.
const numeros = [10,20,30,40];

// Accedo a la posicion del array y creo una variable.
const [diez, veinte, treinta, cuarenta] = numeros;

console.log(diez, veinte, treinta, cuarenta);

const meses = ['Enero','Febrero','Marzo'];

// Si quiero crear una variable en la posicion de marzo.
const [, , marzo] = meses;
console.log(marzo);

// En el siguiente ejemplo extraigo el primer cantante y hago un array con los restantes.
const cantantes = ['Piti Fernandez', 'Piti Alvarez', 'Ricardo Mollo'];
const [primero, ...resto] = cantantes;

console.log(primero);
console.log(resto);