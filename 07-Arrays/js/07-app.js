const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 300 },
    { nombre: 'Mouse', precio: 200 },
    { nombre: 'Teclado', precio: 150 },
    { nombre: 'Gabinete', precio: 600 },
    { nombre: 'Impresora', precio: 2000 },
    { nombre: 'Gpu', precio: 30000 },
    { nombre: 'Cpu', precio: 60000 }
]

//Mismo resultado, distintos ejemplos.
for(let i = 0; i < carrito.length; i++){
    console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`)
}

carrito.forEach(function(producto) {
    console.log(`${producto.nombre} - precio: ${producto.precio}`)
})

//La diferencia entre .map .forEach, es que con el map se puede crear un array nuevo. No así con forEach.
const nuevoArray = carrito.map(function(p){
    return `${p.nombre} - precio: ${p.precio}`
})
console.log(nuevoArray);

