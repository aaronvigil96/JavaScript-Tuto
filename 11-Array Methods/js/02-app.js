const meses = ['Enero','Febrero','Marzo','Abril','Mayo'];
const carrito = [
    {nombre: "Televisor", precio: 500},
    {nombre: "Mouse", precio: 300},
    {nombre: "Teclado", precio: 400},
    {nombre: "CPU", precio: 5000},
    {nombre: "GPU", precio: 50000}
];

let resultado = meses.findIndex( mes => mes === 'Abril'); //Encontrando la posicion de Abril.
let resultado2 = carrito.findIndex(producto => producto.nombre === 'CPU'); //Encontrando la posicion de CPU.
console.log(resultado2);