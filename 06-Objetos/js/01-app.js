//Un objeto agrupa todo en una sola variable.

//Object literal
//Llave (nombre): valor (Monitor 20 pulgadas)
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

//Formas de acceder a los valores de un objeto.
console.log(producto.nombre); //Mejor forma de acceder.
console.log(producto['nombre']); //Alternativa.

//Agregar nuevas propiedades a un objeto.
producto.imagen = "imagen.jpg";

//Eliminar propiedad de un objeto.
delete producto.imagen; 

const nombre = producto.nombre; //Extrayendo el valor del objeto producto.

//Destructuring de objetos.
const { precio, disponible } = producto;
console.log(precio)

