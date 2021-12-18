const carrito = [
    {nombre: "Televisor", precio: 500},
    {nombre: "Mouse", precio: 300},
    {nombre: "Teclado", precio: 400},
    {nombre: "CPU", precio: 5000},
    {nombre: "GPU", precio: 50000}
];

let resultado = carrito.filter( producto => producto.precio < 400);
resultado = carrito.filter( producto => producto.nombre !== 'Teclado');
resultado = carrito.filter( producto => producto.nombre === 'CPU');
console.log(resultado);