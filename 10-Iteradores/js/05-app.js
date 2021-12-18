// forEach
const pendientes = ["Comer","Estudiar","Trabajar","Estudiar JavaScript"];
//Si solamente tiene una linea de codigo se puede simplificar
pendientes.forEach( pendiente => console.log(pendiente) );
//1°parametro: iteracion por cada elemento, 2°parametro: indice,
pendientes.forEach((pendiente, indice) => console.log(pendiente, indice));
//La diferencia entre el forEach y el .map es que el map te crea un arreglo nuevo y el each no ej:
const arregloNuevo = pendientes.forEach( e => `${e}`); //Este arroja undefined.
const arregloNuevo2 = pendientes.map(e => `${e}`); //Este arroja un array nuevo.

console.log(arregloNuevo);
console.log(arregloNuevo2);