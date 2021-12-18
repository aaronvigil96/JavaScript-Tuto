const meses = ['Enero','Febrero','Marzo','Abril','Mayo'];
const carrito = [
    {nombre: "Televisor", precio: 500},
    {nombre: "Mouse", precio: 300},
    {nombre: "Teclado", precio: 400},
    {nombre: "CPU", precio: 5000},
    {nombre: "GPU", precio: 50000}
];

//Comprobar si un valor existe en un Arreglo.
const resultado = meses.includes('Enero'); //Es verdadero porque include se encarga de fijarse si existe o no, y arroja un boolean de acuerdo a lo obtenido.
const existe = meses.some(mes => mes === 'Enero');

//Comprobar si un valor existe en un Objeto.
const resultado2 = carrito.some( producto => producto.nombre === 'Mouse');