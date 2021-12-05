const meses = ['Enero','Febrero','Marzo'];

//Agregar al final del arreglo.
meses.push('Abril');

//Agregar al comienzo del arreglo.
meses.unshift('Mayo');

console.table(meses);

//--------------------Ejemplo carrito de compra-------------------//
const carrito = [];

//Object constructor para crear productos.
function Producto(nombre, precio, disponibilidad){
    this.nombre = nombre;
    this.precio = precio;
    this.disponibilidad = disponibilidad;
}

//Creamos dos productos
let televisor = new Producto('Televisor 27 pulgadas', 500, true);
let cafetera = new Producto('Cafetera Phillips', 300, false);

//Pusheamos los dos producto a carrito.
//Forma imperativa
carrito.push(televisor,cafetera);
console.table(carrito);