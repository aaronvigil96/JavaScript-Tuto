//Object literal
const producto = {
    nombre: "Monitor 24 pulgadas",
    precio: 500,
    disponible: true
}

//Object constructor
function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto('Disquetera', 500)
console.log(producto2);

const producto3 = new Producto('Gabinete', 1200)
console.log(producto3)