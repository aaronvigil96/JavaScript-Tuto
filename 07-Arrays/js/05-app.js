const carrito = [];

const producto = {
    nombre: 'Monitor 20',
    precio: 410,
    marca: 'dell'
}

const producto2 = {
    nombre: 'Mouse',
    precio: 1000,
    marca: 'Logitech'
}

const producto3 = {
    nombre: 'Teclado',
    precio: 2000,
    marca: 'HyperX'
}

resultado = [...carrito, producto, producto2, producto3];
console.table(resultado);

//Eliminar el ultimo elemento del array .pop()
resultado.pop();

//Eliminar el primer elemento del array .shift()
resultado.shift();

//Eliminar un determinado elemento .splice()
//El metodo splice recibe dos parametros (desde donde, hasta donde)
//Elimina el elemento de la posicion 1 hasta la 1, quiere decir que elimina solo un elemento.
resultado.splice(1,1);

console.table(resultado);