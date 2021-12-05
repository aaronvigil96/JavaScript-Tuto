//Aunque esté declarado con la variable CONST se pueden hacer modificaciones.
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

producto.disponible = false;
delete producto.precio;
console.log(producto);