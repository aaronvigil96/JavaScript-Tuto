const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 300 },
    { nombre: 'Mouse', precio: 200 },
    { nombre: 'Teclado', precio: 150 },
    { nombre: 'Gabinete', precio: 600 },
    { nombre: 'Impresora', precio: 2000 },
    { nombre: 'Gpu', precio: 30000 },
    { nombre: 'Cpu', precio: 60000 }
]
//Con funcion expresion
const otroArreglo = carrito.map(function(producto){
    return `Nombre: ${producto.nombre} - Precio: ${producto.precio}`;
})
console.log(otroArreglo);


//Con arrow function
const nuevoCarrito = carrito.map(producto => `Nombre: ${producto.nombre} - Precio: ${producto.precio}`)//.map
carrito.forEach(producto => console.log(`Nombre: ${producto.nombre} - Precio: ${producto.precio}`));//.forEach

console.log(nuevoCarrito);