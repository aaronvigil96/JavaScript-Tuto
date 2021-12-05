const producto = 'Monitor 27 pulgadas';

//.replace para remplazar
console.log(producto);
console.log(producto.replace('pulgadas', '"')); //Cambiamos el primer parametro por el segundo.

//.slice para cortar
console.log(producto.slice(0, 10)); //Corta de la posicion 0 al 10;

//alternativa al slice.
console.log(producto.substring(2, 1)); //Si se le pasa el primer parametro mayor al segundo, lo invierte.

//charAt.
console.log(producto.charAt(0)); //Retorna "M";